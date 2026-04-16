import fs from 'node:fs'
import path from 'node:path'
import { PDFParse } from 'pdf-parse'
import { lookupWordDetails } from '../src/utils/dictionaryLookup.js'

const PDF_PATH =
  'd:\\WXLT\\xwechat_files\\wxid_de62rvue2eth22_be30\\msg\\file\\2026-04\\Emerging-Actuator-Technologies-A-Micromechatronic-Approach_ISBN0470091975(1).pdf'
const START_PAGE = 34
const END_PAGE = 68
const OUTPUT_PATH = path.resolve('src/data/section13Vocabulary.js')
const BATCH_SIZE = 6

const STOP_WORDS = new Set([
  'a',
  'about',
  'all',
  'also',
  'an',
  'and',
  'are',
  'as',
  'at',
  'be',
  'been',
  'between',
  'both',
  'but',
  'by',
  'can',
  'did',
  'do',
  'done',
  'during',
  'each',
  'for',
  'from',
  'has',
  'have',
  'he',
  'her',
  'here',
  'his',
  'i',
  'if',
  'in',
  'into',
  'is',
  'it',
  'its',
  'may',
  'more',
  'most',
  'new',
  'not',
  'of',
  'on',
  'one',
  'or',
  'other',
  'our',
  'ours',
  'she',
  'so',
  'such',
  'than',
  'that',
  'the',
  'their',
  'them',
  'then',
  'there',
  'these',
  'they',
  'this',
  'three',
  'through',
  'to',
  'too',
  'two',
  'used',
  'using',
  'was',
  'we',
  'were',
  'when',
  'where',
  'which',
  'while',
  'with',
  'you',
  'your',
  'thus',
])

function normalizePdfText(text) {
  return text
    .replace(/--\s*\d+\s*of\s*\d+\s*--/gi, ' ')
    .replace(/-\s*\n\s*/g, '')
    .replace(/[\u2010-\u2015]/g, '-')
    .replace(/\n+/g, '\n')
}

function extractWords(text) {
  const tokens = text.toLowerCase().replace(/[’']/g, "'").match(/[a-z]+(?:'[a-z]+)?(?:-[a-z]+)*/g) || []
  return [...new Set(tokens)].filter((word) => word.length > 2 && !STOP_WORDS.has(word)).sort()
}

async function retryLookup(word, retries = 2) {
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      return await lookupWordDetails(word)
    } catch (error) {
      if (attempt === retries) {
        return { phonetic: '-', meaning: '待补充' }
      }
      await new Promise((resolve) => setTimeout(resolve, 500))
    }
  }
  return { phonetic: '-', meaning: '待补充' }
}

async function buildVocabulary(words) {
  const results = []

  for (let index = 0; index < words.length; index += BATCH_SIZE) {
    const chunk = words.slice(index, index + BATCH_SIZE)
    const resolved = await Promise.all(
      chunk.map(async (word) => {
        const details = await retryLookup(word)
        return {
          word,
          phonetic: details?.phonetic || '-',
          meaning: details?.meaning || '待补充',
        }
      }),
    )

    results.push(...resolved)
    console.log(`processed ${Math.min(index + BATCH_SIZE, words.length)} / ${words.length}`)
  }

  return results
}

function toModuleSource(items) {
  const payload = JSON.stringify(items, null, 2)
  return `export const SECTION_1_3_VOCABULARY = ${payload}\n`
}

async function main() {
  if (!fs.existsSync(PDF_PATH)) {
    throw new Error(`PDF not found: ${PDF_PATH}`)
  }

  const parser = new PDFParse({ data: fs.readFileSync(PDF_PATH) })
  let fullText = ''
  for (let page = START_PAGE; page <= END_PAGE; page += 1) {
    const pageText = await parser.getText({ partial: [page] })
    fullText += `\n${pageText.text}`
  }
  await parser.destroy()

  const words = extractWords(normalizePdfText(fullText))
  console.log(`unique candidate words: ${words.length}`)
  const vocabulary = await buildVocabulary(words)
  fs.writeFileSync(OUTPUT_PATH, toModuleSource(vocabulary), 'utf8')
  console.log(`saved: ${OUTPUT_PATH}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
