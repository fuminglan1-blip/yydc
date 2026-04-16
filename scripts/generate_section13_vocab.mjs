import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { PDFParse } from 'pdf-parse'
import { lookupWordDetails } from '../src/utils/dictionaryLookup.js'

const PDF_PATH =
  'd:\\WXLT\\xwechat_files\\wxid_de62rvue2eth22_be30\\msg\\file\\2026-04\\Emerging-Actuator-Technologies-A-Micromechatronic-Approach_ISBN0470091975(1).pdf'
const START_PAGE = 34
const OUTPUT_PATH = path.resolve('src/data/section13Vocabulary.js')
const BATCH_SIZE = 8

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
  return [...new Set(tokens)].filter((word) => word.length > 2 && !STOP_WORDS.has(word))
}

function isMeaningPending(meaning) {
  if (typeof meaning !== 'string') {
    return true
  }

  const normalized = meaning.trim()
  return normalized === '' || normalized === '-' || normalized === '待补充'
}

function isPhoneticPending(phonetic) {
  if (typeof phonetic !== 'string') {
    return true
  }

  const normalized = phonetic.trim()
  return normalized === '' || normalized === '-'
}

async function readExistingCache() {
  if (!fs.existsSync(OUTPUT_PATH)) {
    return new Map()
  }

  try {
    const imported = await import(`${pathToFileURL(OUTPUT_PATH).href}?ts=${Date.now()}`)
    const list = imported?.SECTION_1_3_VOCABULARY
    if (!Array.isArray(list)) {
      return new Map()
    }

    const map = new Map()
    list.forEach((item) => {
      if (item && typeof item.word === 'string') {
        map.set(item.word, item)
      }
    })
    return map
  } catch (error) {
    console.warn('failed to load existing cache, will rebuild all words')
    return new Map()
  }
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

async function buildVocabulary(words, existingCache) {
  const results = []

  for (let index = 0; index < words.length; index += BATCH_SIZE) {
    const chunk = words.slice(index, index + BATCH_SIZE)
    const resolved = await Promise.all(
      chunk.map(async (word) => {
        const cached = existingCache.get(word)
        if (cached) {
          return {
            word,
            phonetic: cached.phonetic,
            meaning: cached.meaning,
          }
        }

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
  const info = await parser.getInfo()
  const endPage = info.total
  let fullText = ''
  for (let page = START_PAGE; page <= endPage; page += 1) {
    const pageText = await parser.getText({ partial: [page] })
    fullText += `\n${pageText.text}`
  }
  await parser.destroy()

  const words = extractWords(normalizePdfText(fullText))
  const existingCache = await readExistingCache()
  console.log(`page range: ${START_PAGE}-${endPage}`)
  console.log(`unique candidate words: ${words.length}`)
  console.log(`existing cache words: ${existingCache.size}`)
  const vocabulary = await buildVocabulary(words, existingCache)
  fs.writeFileSync(OUTPUT_PATH, toModuleSource(vocabulary), 'utf8')
  console.log(`saved: ${OUTPUT_PATH}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
