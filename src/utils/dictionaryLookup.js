const DICTIONARY_API_BASE = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
const TRANSLATE_API_BASE = 'https://api.mymemory.translated.net/get'

function hasChineseText(text) {
  return /[\u4e00-\u9fff]/.test(text)
}

function cleanMeaningText(text) {
  if (typeof text !== 'string') {
    return ''
  }

  return text.replace(/\s+/g, ' ').trim()
}

function pickPhonetic(entry) {
  if (!entry || typeof entry !== 'object') {
    return '-'
  }

  if (typeof entry.phonetic === 'string' && entry.phonetic.trim()) {
    return entry.phonetic.trim()
  }

  if (Array.isArray(entry.phonetics)) {
    const item = entry.phonetics.find(
      (phonetic) => typeof phonetic?.text === 'string' && phonetic.text.trim(),
    )
    if (item) {
      return item.text.trim()
    }
  }

  return '-'
}

function pickDefinition(entry) {
  if (!entry || !Array.isArray(entry.meanings)) {
    return ''
  }

  for (const meaning of entry.meanings) {
    if (!Array.isArray(meaning.definitions)) {
      continue
    }

    const match = meaning.definitions.find(
      (item) => typeof item?.definition === 'string' && item.definition.trim(),
    )
    if (match) {
      return match.definition.trim()
    }
  }

  return ''
}

async function fetchDictionaryEntry(word) {
  const response = await fetch(`${DICTIONARY_API_BASE}${encodeURIComponent(word)}`)
  if (!response.ok) {
    return null
  }

  const data = await response.json()
  if (!Array.isArray(data) || data.length === 0) {
    return null
  }

  return data[0]
}

async function translateToChinese(text) {
  const params = new URLSearchParams({
    q: text,
    langpair: 'en|zh-CN',
  })

  const response = await fetch(`${TRANSLATE_API_BASE}?${params.toString()}`)
  if (!response.ok) {
    return ''
  }

  const data = await response.json()
  return cleanMeaningText(data?.responseData?.translatedText)
}

export async function lookupWordDetails(word) {
  const [entryResult, directMeaningResult] = await Promise.allSettled([
    fetchDictionaryEntry(word),
    translateToChinese(word),
  ])

  const entry = entryResult.status === 'fulfilled' ? entryResult.value : null
  const phonetic = pickPhonetic(entry)

  let meaning = directMeaningResult.status === 'fulfilled' ? directMeaningResult.value : ''

  if (!hasChineseText(meaning)) {
    const definition = pickDefinition(entry)
    if (definition) {
      const definitionMeaning = await translateToChinese(definition)
      if (hasChineseText(definitionMeaning)) {
        meaning = definitionMeaning
      }
    }
  }

  if (!hasChineseText(meaning)) {
    meaning = '待补充'
  }

  return {
    phonetic,
    meaning,
  }
}
