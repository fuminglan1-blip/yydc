import fs from 'node:fs'
import path from 'node:path'
import { PDFParse } from 'pdf-parse'

const PDF_PATH = path.resolve(
  './Emerging-Actuator-Technologies-A-Micromechatronic-Approach_ISBN0470091975(3).pdf',
)
const OUTPUT_PATH = path.resolve('./src/data/readingPassages.js')
const CHAPTER_SOURCE = 'Emerging Actuator Technologies (Chapter 5)'
const CHAPTER_TITLE = '5 Magnetostrictive actuators (MSs)'

function normalizeSpaces(text) {
  return text
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\s+/g, ' ')
    .trim()
}

function isFooter(line) {
  return /^--\s*\d+\s+of\s+\d+\s*--$/i.test(line)
}

function isPageHeader(line) {
  return (
    line.includes('MAGNETOSTRICTIVE ACTUATORS (MSs)') ||
    line.includes('ELECTRO- AND MAGNETORHEOLOGICAL ACTUATORS') ||
    /^[A-Z][A-Z\s:,\-()/.&]+\d+$/.test(line)
  )
}

function cleanLine(line) {
  return normalizeSpaces(
    line
      .replace(/\t+/g, ' ')
      .replace(/^\d+\s+MAGNETOSTRICTIVE ACTUATORS \(MSs\)\s*/i, '')
      .replace(/^\d+\s+ELECTRO- AND MAGNETORHEOLOGICAL ACTUATORS\s*/i, ''),
  )
}

function extractContentLines(pageText) {
  return pageText
    .split('\n')
    .map(cleanLine)
    .filter(Boolean)
    .filter((line) => {
      if (isFooter(line) || isPageHeader(line)) {
        return false
      }
      if (/^(Figure|Table)\s+\d+/i.test(line)) {
        return false
      }
      if (/^Emerging Actuator Technologies: A Micromechatronic Approach\b/i.test(line)) {
        return false
      }
      if (/^J\.\s*L\.\s*Pons\b/i.test(line) || /\bISBN\b/i.test(line)) {
        return false
      }
      return true
    })
}

function mergeHyphenatedText(parts) {
  let result = ''

  for (const part of parts) {
    if (!result) {
      result = part
      continue
    }

    if (result.endsWith('-')) {
      result = `${result.slice(0, -1)}${part}`
    } else {
      result = `${result} ${part}`
    }
  }

  return normalizeSpaces(result)
}

function splitIntoSentenceBlocks(text) {
  const clean = text
    .replace(/([A-Za-z])\s*-\s*([A-Za-z])/g, '$1$2')
    .replace(/\s+/g, ' ')
    .trim()

  if (!clean) {
    return []
  }

  const sentences = clean.split(/(?<=[.!?])\s+/).map((item) => item.trim()).filter(Boolean)
  const blocks = []
  let current = ''
  let sentenceCount = 0

  for (const sentence of sentences) {
    if (!current) {
      current = sentence
      sentenceCount = 1
      continue
    }

    const candidate = `${current} ${sentence}`.trim()
    if (candidate.length > 420 || sentenceCount >= 3) {
      blocks.push(current)
      current = sentence
      sentenceCount = 1
      continue
    }

    current = candidate
    sentenceCount += 1
  }

  if (current) {
    blocks.push(current)
  }

  return blocks
}

function isSectionHeading(line) {
  return /^5(\.\d+)*\s+/.test(line)
}

function shouldSkipChapterTitleLine(line) {
  return line === '5' || line === 'Magnetostrictive actuators' || line === '(MSs)'
}

function buildSection(title, buffer, sections) {
  const body = mergeHyphenatedText(buffer)
  const blocks = splitIntoSentenceBlocks(body).map((block, index) => ({
    id: `block-${index + 1}`,
    en: block,
    zh: '',
  }))

  if (blocks.length === 0) {
    return
  }

  sections.push({
    id: `section-${sections.length + 1}`,
    title,
    blocks,
  })
}

async function locatePageRange(parser, totalPages) {
  let startPage = null
  let nextChapterPage = null

  for (let page = 1; page <= totalPages; page += 1) {
    const text = normalizeSpaces((await parser.getText({ partial: [page] })).text)

    if (!startPage && page > 150 && /^5\s+Magnetostrictive actuators\b/i.test(text)) {
      startPage = page
      continue
    }

    if (
      startPage &&
      page > startPage &&
      /^6\s+Electro- and magnetorheological actuators\b/i.test(text)
    ) {
      nextChapterPage = page
      break
    }
  }

  if (!startPage || !nextChapterPage) {
    throw new Error(`Failed to locate Chapter 5 range: start=${startPage}, next=${nextChapterPage}`)
  }

  return { startPage, endPage: nextChapterPage - 1 }
}

function buildSections(lines) {
  const sections = []
  let currentHeading = CHAPTER_TITLE
  let currentBuffer = []
  let pendingHeading = false

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i]
    const next = lines[i + 1] || ''

    if (shouldSkipChapterTitleLine(line)) {
      continue
    }

    if (isSectionHeading(line)) {
      buildSection(currentHeading, currentBuffer, sections)
      currentHeading = line
      currentBuffer = []
      pendingHeading = true

      if (
        next &&
        !isSectionHeading(next) &&
        !/[.!?]$/.test(next) &&
        next.length < 100 &&
        /^[a-z]/.test(next)
      ) {
        currentHeading = normalizeSpaces(`${line} ${next}`)
        i += 1
        pendingHeading = false
      }

      continue
    }

    if (pendingHeading && currentBuffer.length === 0 && line.length < 100 && /^[a-z]/.test(line)) {
      currentHeading = normalizeSpaces(`${currentHeading} ${line}`)
      pendingHeading = false
      continue
    }

    pendingHeading = false
    currentBuffer.push(line)
  }

  buildSection(currentHeading, currentBuffer, sections)
  return sections
}

async function main() {
  if (!fs.existsSync(PDF_PATH)) {
    throw new Error(`PDF not found: ${PDF_PATH}`)
  }

  const parser = new PDFParse({ data: fs.readFileSync(PDF_PATH) })
  const info = await parser.getInfo()
  const { startPage, endPage } = await locatePageRange(parser, info.total)

  const lines = []
  for (let page = startPage; page <= endPage; page += 1) {
    const text = await parser.getText({ partial: [page] })
    lines.push(...extractContentLines(text.text))
  }

  await parser.destroy()

  const sections = buildSections(lines)
  const moduleSource = `export const READING_CONTENT = ${JSON.stringify(
    {
      source: CHAPTER_SOURCE,
      pageRange: `${startPage}-${endPage}`,
      sections,
    },
    null,
    2,
  )}\n`

  fs.writeFileSync(OUTPUT_PATH, moduleSource, 'utf8')
  console.log(`saved reading content: ${OUTPUT_PATH}`)
  console.log(`page range: ${startPage}-${endPage}`)
  console.log(`sections: ${sections.length}`)
  console.log(`blocks: ${sections.reduce((sum, item) => sum + item.blocks.length, 0)}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
