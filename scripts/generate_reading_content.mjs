import fs from 'node:fs'
import path from 'node:path'
import { PDFParse } from 'pdf-parse'

const PDF_PATH = path.resolve(
  './Emerging-Actuator-Technologies-A-Micromechatronic-Approach_ISBN0470091975(3).pdf',
)
const OUTPUT_PATH = path.resolve('./src/data/readingPassages.js')
const CACHE_PATH = path.resolve('./scripts/translation-cache.json')
const TRANSLATE_API_BASE = 'https://api.mymemory.translated.net/get'
const TRANSLATE_EVERY_N_BLOCKS = 2

function normalizeSpaces(text) {
  return text.replace(/\s+/g, ' ').trim()
}

function isPageHeader(line) {
  if (
    line.includes('ACTUATORS IN MOTION CONTROL SYSTEMS: MECHATRONICS') ||
    line.includes('PIEZOELECTRIC ACTUATORS')
  ) {
    return true
  }

  return /^[A-Z][A-Z\s:,\-()/.&]+\d+$/.test(line)
}

function isFooter(line) {
  return /^--\s*\d+\s+of\s+\d+\s*--$/i.test(line)
}

function isHeading(line) {
  return /^\d+(\.\d+)*\s+/.test(normalizeSpaces(line))
}

function cleanLine(line) {
  const normalized = line
    .replace(/\t+/g, ' ')
    .replace(/^\d+\s+ACTUATORS IN MOTION CONTROL SYSTEMS: MECHATRONICS\s*/i, '')
    .replace(/^\d+\s+PIEZOELECTRIC ACTUATORS\s*/i, '')
    .trim()

  return normalized
}

function extractContentLines(pageText, pageNumber, startPage) {
  const lines = pageText.split('\n').map(cleanLine).filter(Boolean)
  const filtered = lines.filter((line) => {
    if (isFooter(line) || isPageHeader(line)) {
      return false
    }
    if (/^(Figure|Table)\s+\d+/i.test(line)) {
      return false
    }
    return true
  })

  if (pageNumber !== startPage) {
    return filtered
  }

  const startIndex = filtered.findIndex((line) => /^1\.4\b/.test(line))
  if (startIndex < 0) {
    return filtered
  }

  return filtered.slice(startIndex)
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

  sentences.forEach((sentence) => {
    if (!current) {
      current = sentence
      sentenceCount = 1
      return
    }

    const candidate = `${current} ${sentence}`.trim()
    if (candidate.length > 420 || sentenceCount >= 3) {
      blocks.push(current)
      current = sentence
      sentenceCount = 1
      return
    }

    current = candidate
    sentenceCount += 1
  })

  if (current) {
    blocks.push(current)
  }

  return blocks
}

function sanitizeHeading(line) {
  return normalizeSpaces(line).replace(/\s+/g, ' ')
}

function loadTranslationCache() {
  if (!fs.existsSync(CACHE_PATH)) {
    return {}
  }

  try {
    return JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'))
  } catch {
    return {}
  }
}

function saveTranslationCache(cache) {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2), 'utf8')
}

async function translateToChinese(text, cache) {
  if (!text) {
    return ''
  }

  if (cache[text]) {
    return cache[text]
  }

  const params = new URLSearchParams({
    q: text,
    langpair: 'en|zh-CN',
  })

  try {
    const response = await fetch(`${TRANSLATE_API_BASE}?${params.toString()}`)
    if (!response.ok) {
      cache[text] = ''
      return ''
    }

    const data = await response.json()
    const translated = normalizeSpaces(data?.responseData?.translatedText || '')
    cache[text] = translated
    return translated
  } catch {
    cache[text] = ''
    return ''
  }
}

async function translateBlocks(blocks, cache) {
  const result = []

  for (let i = 0; i < blocks.length; i += 1) {
    const block = blocks[i]
    let zh = ''

    if (i % TRANSLATE_EVERY_N_BLOCKS === 0) {
      zh = await translateToChinese(block, cache)
    }

    result.push({
      id: `block-${i + 1}`,
      en: block,
      zh,
    })
  }

  return result
}

async function locatePageRange(parser, totalPages) {
  let startPage = null
  let chapter3Page = null

  for (let page = 1; page <= totalPages; page += 1) {
    const text = (await parser.getText({ partial: [page] })).text.replace(/\s+/g, ' ')

    if (
      !startPage &&
      page > 20 &&
      /1\.4\s+What is mechatronics\?\s*Principles\s*and\s*biomimesis/i.test(text)
    ) {
      startPage = page
    }

    if (!chapter3Page && page > 20 && /\b3\s+Shape Memory Actuators\b/i.test(text)) {
      chapter3Page = page
    }

    if (startPage && chapter3Page) {
      break
    }
  }

  if (!startPage || !chapter3Page) {
    throw new Error(`Failed to locate range: startPage=${startPage}, chapter3Page=${chapter3Page}`)
  }

  return { startPage, endPage: chapter3Page - 1 }
}

async function main() {
  if (!fs.existsSync(PDF_PATH)) {
    throw new Error(`PDF not found: ${PDF_PATH}`)
  }

  const parser = new PDFParse({ data: fs.readFileSync(PDF_PATH) })
  const info = await parser.getInfo()
  const { startPage, endPage } = await locatePageRange(parser, info.total)
  const translationCache = loadTranslationCache()

  console.log(`page range: ${startPage}-${endPage}`)

  const lines = []
  for (let page = startPage; page <= endPage; page += 1) {
    const text = await parser.getText({ partial: [page] })
    lines.push(...extractContentLines(text.text, page, startPage))
  }
  await parser.destroy()

  const sections = []
  let currentHeading = ''
  let currentBuffer = []
  let pendingHeading = false

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i]
    const next = lines[i + 1] || ''

    if (isHeading(line)) {
      if (currentHeading || currentBuffer.length > 0) {
        const body = mergeHyphenatedText(currentBuffer)
        const blocks = splitIntoSentenceBlocks(body)
        sections.push({
          id: `section-${sections.length + 1}`,
          title: currentHeading || `Section ${sections.length + 1}`,
          blocks: await translateBlocks(blocks, translationCache),
        })
      }

      currentHeading = sanitizeHeading(line)
      currentBuffer = []
      pendingHeading = true

      if (
        next &&
        !isHeading(next) &&
        !/[.!?]$/.test(next) &&
        next.length < 90 &&
        /^[a-z]/.test(next)
      ) {
        currentHeading = sanitizeHeading(`${line} ${next}`)
        i += 1
        pendingHeading = false
      }

      continue
    }

    if (pendingHeading && currentBuffer.length === 0 && line.length < 80 && /^[a-z]/.test(line)) {
      currentHeading = sanitizeHeading(`${currentHeading} ${line}`)
      pendingHeading = false
      continue
    }

    pendingHeading = false
    currentBuffer.push(line)
  }

  if (currentHeading || currentBuffer.length > 0) {
    const body = mergeHyphenatedText(currentBuffer)
    const blocks = splitIntoSentenceBlocks(body)
    sections.push({
      id: `section-${sections.length + 1}`,
      title: currentHeading || `Section ${sections.length + 1}`,
      blocks: await translateBlocks(blocks, translationCache),
    })
  }

  saveTranslationCache(translationCache)

  const moduleSource = `export const READING_CONTENT = ${JSON.stringify(
    {
      source: 'Emerging Actuator Technologies (from 1.4 to before Chapter 3)',
      pageRange: `${startPage}-${endPage}`,
      sections,
    },
    null,
    2,
  )}\n`

  fs.writeFileSync(OUTPUT_PATH, moduleSource, 'utf8')
  console.log(`saved reading content: ${OUTPUT_PATH}`)
  console.log(`sections: ${sections.length}`)
  console.log(`blocks: ${sections.reduce((sum, item) => sum + item.blocks.length, 0)}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
