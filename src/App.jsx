import { useEffect, useMemo, useRef, useState } from 'react'
import EmptyState from './components/EmptyState'
import ImportPanel from './components/ImportPanel'
import PageHeader from './components/PageHeader'
import SearchBar from './components/SearchBar'
import WordTable from './components/WordTable'
import { MOCK_DICTIONARY } from './data/mockDictionary'
import { SECTION_1_3_VOCABULARY } from './data/section13Vocabulary'
import { lookupWordDetails } from './utils/dictionaryLookup'
import { parseCsvFirstColumn, parseManualWords, parseTxtWords } from './utils/wordParser'

const STORAGE_KEY = 'word-study-tool-words-v1'
const PLACEHOLDER_MEANING = '待补充'

function normalizeWord(value) {
  return value.trim().toLowerCase()
}

function isMeaningPending(meaning) {
  if (typeof meaning !== 'string') {
    return true
  }

  const normalized = meaning.trim()
  return normalized === '' || normalized === '-' || normalized === PLACEHOLDER_MEANING
}

function isPhoneticPending(phonetic) {
  if (typeof phonetic !== 'string') {
    return true
  }

  const normalized = phonetic.trim()
  return normalized === '' || normalized === '-'
}

function parseRawEntry(rawWord) {
  const text = String(rawWord ?? '').trim()
  if (!text) {
    return { word: '', meaningHint: '' }
  }

  const chineseMatch = text.match(/[\u4e00-\u9fff].*$/)
  const meaningHint = chineseMatch ? chineseMatch[0].trim() : ''

  let englishPart = chineseMatch ? text.slice(0, chineseMatch.index).trim() : text
  englishPart = englishPart
    .replace(/[\|/,:;]+$/g, '')
    .replace(/\s+/g, ' ')
    .trim()

  return { word: englishPart, meaningHint }
}

function buildWordRecord(rawWord) {
  const { word, meaningHint } = parseRawEntry(rawWord)
  const normalized = normalizeWord(word)

  if (!normalized) {
    return null
  }

  const dictionaryInfo = MOCK_DICTIONARY[normalized]

  return {
    id: normalized,
    word: normalized,
    phonetic: dictionaryInfo?.phonetic ?? '-',
    meaning: dictionaryInfo?.meaning ?? (meaningHint || PLACEHOLDER_MEANING),
  }
}

function readCachedWords() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)

    if (!raw) {
      return []
    }

    const parsed = JSON.parse(raw)

    if (!Array.isArray(parsed)) {
      return []
    }

    const uniqueMap = new Map()
    parsed.forEach((item) => {
      if (!item || typeof item.word !== 'string') {
        return
      }

      const record = buildWordRecord(item.word)
      if (record) {
        const cachedPhonetic = typeof item.phonetic === 'string' ? item.phonetic : ''
        const cachedMeaning = typeof item.meaning === 'string' ? item.meaning : ''

        uniqueMap.set(record.id, {
          ...record,
          phonetic: isPhoneticPending(cachedPhonetic) ? record.phonetic : cachedPhonetic,
          meaning: isMeaningPending(cachedMeaning) ? record.meaning : cachedMeaning,
        })
      }
    })

    return Array.from(uniqueMap.values())
  } catch (error) {
    console.error('读取本地缓存失败:', error)
    return []
  }
}

function buildPresetVocabularyRecords() {
  const uniqueMap = new Map()

  SECTION_1_3_VOCABULARY.forEach((item) => {
    if (!item || typeof item.word !== 'string') {
      return
    }

    const record = buildWordRecord(item.word)
    if (!record) {
      return
    }

    uniqueMap.set(record.id, {
      ...record,
      phonetic: isPhoneticPending(item.phonetic) ? record.phonetic : item.phonetic,
      meaning: isMeaningPending(item.meaning) ? record.meaning : item.meaning,
    })
  })

  return Array.from(uniqueMap.values())
}

function mergeWordLists(primaryWords, secondaryWords) {
  const map = new Map()

  primaryWords.forEach((item) => map.set(item.id, item))
  secondaryWords.forEach((item) => {
    if (!map.has(item.id)) {
      map.set(item.id, item)
    }
  })

  return Array.from(map.values())
}

function initializeWords() {
  const cachedWords = readCachedWords()
  const presetWords = buildPresetVocabularyRecords()
  return mergeWordLists(cachedWords, presetWords)
}

function mergeWords(existingWords, rawWords) {
  const existingIds = new Set(existingWords.map((item) => item.id))
  const nextWords = [...existingWords]
  const pendingLookupIds = []
  let addedCount = 0
  let duplicateCount = 0

  rawWords.forEach((rawWord) => {
    const record = buildWordRecord(rawWord)
    if (!record) {
      return
    }

    if (existingIds.has(record.id)) {
      duplicateCount += 1
      return
    }

    existingIds.add(record.id)
    nextWords.push(record)
    if (record.phonetic === '-' || isMeaningPending(record.meaning)) {
      pendingLookupIds.push(record.id)
    }
    addedCount += 1
  })

  return { nextWords, addedCount, duplicateCount, pendingLookupIds }
}

function App() {
  const [words, setWords] = useState(() => initializeWords())
  const wordsRef = useRef(words)
  const lookupInFlightRef = useRef(false)
  const [manualInput, setManualInput] = useState('')
  const [searchText, setSearchText] = useState('')
  const [speechSupported, setSpeechSupported] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [lookupMessage, setLookupMessage] = useState('')
  const [isLookuping, setIsLookuping] = useState(false)

  useEffect(() => {
    const supported =
      typeof window !== 'undefined' &&
      'speechSynthesis' in window &&
      'SpeechSynthesisUtterance' in window
    setSpeechSupported(supported)
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(words))
  }, [words])

  useEffect(() => {
    wordsRef.current = words
  }, [words])

  const filteredWords = useMemo(() => {
    const keyword = searchText.trim().toLowerCase()

    if (!keyword) {
      return words
    }

    return words.filter((item) => {
      return (
        item.word.includes(keyword) ||
        item.phonetic.toLowerCase().includes(keyword) ||
        item.meaning.toLowerCase().includes(keyword)
      )
    })
  }, [searchText, words])

  const pendingMeaningCount = useMemo(() => {
    return words.filter((item) => isMeaningPending(item.meaning)).length
  }, [words])

  const enrichWordsFromApi = async (wordIds) => {
    const uniqueIds = Array.from(new Set(wordIds))
    if (uniqueIds.length === 0) {
      return
    }

    if (lookupInFlightRef.current) {
      setLookupMessage('正在识别中，请稍候...')
      return
    }

    lookupInFlightRef.current = true
    setIsLookuping(true)
    setLookupMessage(`正在自动识别 ${uniqueIds.length} 个新单词的音标与中文意思...`)

    try {
      const updates = new Map()
      const chunkSize = 4

      for (let index = 0; index < uniqueIds.length; index += chunkSize) {
        const chunk = uniqueIds.slice(index, index + chunkSize)
        const chunkResults = await Promise.all(
          chunk.map(async (wordId) => {
            try {
              const details = await lookupWordDetails(wordId)
              return { wordId, ...details }
            } catch (error) {
              console.error(`自动识别失败: ${wordId}`, error)
              return { wordId, phonetic: '-', meaning: '待补充' }
            }
          }),
        )

        chunkResults.forEach((result) => {
          updates.set(result.wordId, result)
        })
      }

      let updatedCount = 0
      const nextWords = wordsRef.current.map((item) => {
        const update = updates.get(item.id)
        if (!update) {
          return item
        }

        const nextPhonetic = item.phonetic === '-' ? update.phonetic : item.phonetic
        const nextMeaning = isMeaningPending(item.meaning) ? update.meaning : item.meaning

        if (nextPhonetic !== item.phonetic || nextMeaning !== item.meaning) {
          updatedCount += 1
        }

        return {
          ...item,
          phonetic: nextPhonetic,
          meaning: nextMeaning,
        }
      })

      wordsRef.current = nextWords
      setWords(nextWords)

      if (updatedCount > 0) {
        setLookupMessage(`自动识别完成：已补全 ${updatedCount} 个单词。`)
      } else {
        setLookupMessage('自动识别完成：暂未查询到可补全结果。')
      }
    } finally {
      lookupInFlightRef.current = false
      setIsLookuping(false)
    }
  }

  const addWords = (rawWords, sourceLabel) => {
    const { nextWords, addedCount, duplicateCount, pendingLookupIds } = mergeWords(
      wordsRef.current,
      rawWords,
    )

    if (addedCount > 0) {
      wordsRef.current = nextWords
      setWords(nextWords)
    }

    if (addedCount === 0) {
      setFeedback(`${sourceLabel}未添加新单词，可能都已存在或为空。`)
      return
    }

    const duplicateInfo = duplicateCount > 0 ? `，跳过 ${duplicateCount} 个重复词` : ''
    setFeedback(`${sourceLabel}新增 ${addedCount} 个单词${duplicateInfo}。`)

    if (pendingLookupIds.length > 0) {
      void enrichWordsFromApi(pendingLookupIds)
    } else {
      setLookupMessage('新单词已全部命中本地词典，无需联网补全。')
    }
  }

  const handleManualAdd = () => {
    const parsedWords = parseManualWords(manualInput)
    addWords(parsedWords, '手动输入')
    setManualInput('')
  }

  const handleFileImport = async (file) => {
    const text = await file.text()
    const lowerName = file.name.toLowerCase()

    const parsedWords = lowerName.endsWith('.csv')
      ? parseCsvFirstColumn(text)
      : parseTxtWords(text)

    addWords(parsedWords, `文件 ${file.name}`)
  }

  const handleSpeak = (word) => {
    if (!speechSupported) {
      setFeedback('当前浏览器不支持发音播放，请使用最新版 Chrome/Edge/Safari。')
      return
    }

    const utterance = new SpeechSynthesisUtterance(word)
    utterance.lang = 'en-US'
    utterance.rate = 0.95

    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)
  }

  const handleDelete = (id) => {
    const nextWords = wordsRef.current.filter((item) => item.id !== id)
    wordsRef.current = nextWords
    setWords(nextWords)
  }

  const handleClearAll = () => {
    wordsRef.current = []
    setWords([])
    setFeedback('已清空全部单词。')
  }

  const handleDedupe = () => {
    const uniqueMap = new Map()
    wordsRef.current.forEach((item) => {
      if (!uniqueMap.has(item.id)) {
        uniqueMap.set(item.id, item)
      }
    })
    const dedupedWords = Array.from(uniqueMap.values())
    const removedCount = wordsRef.current.length - dedupedWords.length

    if (removedCount === 0) {
      setFeedback('当前列表无需去重。')
      return
    }

    wordsRef.current = dedupedWords
    setWords(dedupedWords)
    setFeedback(`去重完成，已移除 ${removedCount} 个重复项。`)
  }

  const handleRecognizeMeanings = () => {
    const targets = wordsRef.current
      .filter((item) => isMeaningPending(item.meaning) || item.phonetic === '-')
      .map((item) => item.id)

    if (targets.length === 0) {
      setLookupMessage('当前单词都已有中文意思，无需识别。')
      return
    }

    void enrichWordsFromApi(targets)
  }

  return (
    <main className="app-shell">
      <PageHeader totalCount={words.length} />

      <ImportPanel
        manualInput={manualInput}
        onManualInputChange={setManualInput}
        onManualAdd={handleManualAdd}
        onFileImport={handleFileImport}
      />

      <SearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
        totalCount={words.length}
        filteredCount={filteredWords.length}
        onDedupe={handleDedupe}
        onClearAll={handleClearAll}
        pendingMeaningCount={pendingMeaningCount}
        onRecognizeMeanings={handleRecognizeMeanings}
        isLookuping={isLookuping}
      />

      {!speechSupported && (
        <p className="notice warning">
          当前浏览器不支持 Web Speech API，发音功能不可用。建议使用最新版 Chrome / Edge / Safari。
        </p>
      )}

      {feedback && <p className="notice info">{feedback}</p>}
      {lookupMessage && <p className="notice info">{lookupMessage}</p>}

      {filteredWords.length > 0 ? (
        <WordTable
          words={filteredWords}
          onSpeak={handleSpeak}
          onDelete={handleDelete}
          speechSupported={speechSupported}
        />
      ) : (
        <EmptyState hasWords={words.length > 0} />
      )}
    </main>
  )
}

export default App
