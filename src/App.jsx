import { useEffect, useMemo, useState } from 'react'
import { READING_CONTENT } from './data/readingPassages'
import { lookupWordDetails, translateEnglishTextToChinese } from './utils/dictionaryLookup'

const WORD_CACHE_KEY = 'reading-practice-word-cache-v1'
const BLOCK_TRANSLATION_CACHE_KEY = 'reading-practice-block-translation-v1'

function normalizeWord(word) {
  return word.toLowerCase()
}

function tokenizeText(text) {
  return text.match(/[A-Za-z]+(?:[-'][A-Za-z]+)?|[^A-Za-z]+/g) || []
}

function splitSpeakChunks(text) {
  const sentences = text.split(/(?<=[.!?])\s+/).map((item) => item.trim()).filter(Boolean)
  if (sentences.length === 0) {
    return [text]
  }

  const chunks = []
  let current = ''

  sentences.forEach((sentence) => {
    if (!current) {
      current = sentence
      return
    }

    const next = `${current} ${sentence}`
    if (next.length > 240) {
      chunks.push(current)
      current = sentence
      return
    }

    current = next
  })

  if (current) {
    chunks.push(current)
  }

  return chunks
}

function readObjectCache(key) {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) {
      return {}
    }
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') {
      return {}
    }
    return parsed
  } catch {
    return {}
  }
}

function getBlockKey(sectionId, blockId) {
  return `${sectionId}::${blockId}`
}

function App() {
  const [sectionIndex, setSectionIndex] = useState(0)
  const [wordCache, setWordCache] = useState(() => readObjectCache(WORD_CACHE_KEY))
  const [blockTranslationCache, setBlockTranslationCache] = useState(() =>
    readObjectCache(BLOCK_TRANSLATION_CACHE_KEY),
  )
  const [selectedWord, setSelectedWord] = useState('')
  const [wordDetailLoading, setWordDetailLoading] = useState(false)
  const [speechSupported, setSpeechSupported] = useState(false)
  const [speakingKey, setSpeakingKey] = useState('')
  const [notice, setNotice] = useState('')
  const [translatingBlocks, setTranslatingBlocks] = useState({})
  const [translationFailedBlocks, setTranslationFailedBlocks] = useState({})

  const currentSection = READING_CONTENT.sections[sectionIndex]

  useEffect(() => {
    const supported =
      typeof window !== 'undefined' &&
      'speechSynthesis' in window &&
      'SpeechSynthesisUtterance' in window
    setSpeechSupported(supported)
  }, [])

  useEffect(() => {
    localStorage.setItem(WORD_CACHE_KEY, JSON.stringify(wordCache))
  }, [wordCache])

  useEffect(() => {
    localStorage.setItem(BLOCK_TRANSLATION_CACHE_KEY, JSON.stringify(blockTranslationCache))
  }, [blockTranslationCache])

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  useEffect(() => {
    let cancelled = false

    const run = async () => {
      if (!currentSection) {
        return
      }

      const targets = currentSection.blocks
        .map((block, index) => ({ block, index }))
        .filter(({ block, index }) => {
          if (index % 2 !== 0) {
            return false
          }
          if (block.zh) {
            return false
          }
          const key = getBlockKey(currentSection.id, block.id)
          return !blockTranslationCache[key]
        })
        .slice(0, 12)

      for (const { block } of targets) {
        if (cancelled) {
          return
        }

        const key = getBlockKey(currentSection.id, block.id)
        setTranslatingBlocks((prev) => ({ ...prev, [key]: true }))
        setTranslationFailedBlocks((prev) => ({ ...prev, [key]: false }))

        try {
          let translated = ''
          for (let attempt = 0; attempt < 3; attempt += 1) {
            translated = await translateEnglishTextToChinese(block.en)
            if (translated) {
              break
            }
            await new Promise((resolve) => setTimeout(resolve, 450))
          }

          if (!cancelled && translated) {
            setBlockTranslationCache((prev) => ({ ...prev, [key]: translated }))
          } else if (!cancelled) {
            setTranslationFailedBlocks((prev) => ({ ...prev, [key]: true }))
          }
        } catch {
          if (!cancelled) {
            setNotice('部分段落翻译加载失败，可稍后重试。')
            setTranslationFailedBlocks((prev) => ({ ...prev, [key]: true }))
          }
        } finally {
          if (!cancelled) {
            setTranslatingBlocks((prev) => ({ ...prev, [key]: false }))
          }
        }
      }
    }

    void run()

    return () => {
      cancelled = true
    }
  }, [blockTranslationCache, currentSection])

  const selectedWordDetail = useMemo(() => {
    if (!selectedWord) {
      return null
    }

    return wordCache[selectedWord] || null
  }, [selectedWord, wordCache])

  const sectionTextForReading = useMemo(() => {
    if (!currentSection) {
      return ''
    }
    return currentSection.blocks.map((block) => block.en).join(' ')
  }, [currentSection])

  const playText = (text, key) => {
    if (!speechSupported) {
      setNotice('当前浏览器不支持朗读，请使用最新版 Chrome / Edge / Safari。')
      return
    }

    if (!text.trim()) {
      return
    }

    const synth = window.speechSynthesis
    synth.cancel()

    const chunks = splitSpeakChunks(text)
    const utterances = chunks.map((chunk) => {
      const utterance = new SpeechSynthesisUtterance(chunk)
      utterance.lang = 'en-US'
      utterance.rate = 0.92
      utterance.pitch = 1
      return utterance
    })

    setSpeakingKey(key)

    utterances.forEach((utterance, index) => {
      if (index === utterances.length - 1) {
        utterance.onend = () => setSpeakingKey('')
        utterance.onerror = () => setSpeakingKey('')
      }
      synth.speak(utterance)
    })
  }

  const playWordInstant = (word) => {
    if (!speechSupported) {
      return
    }

    const synth = window.speechSynthesis
    synth.cancel()
    const utterance = new SpeechSynthesisUtterance(word)
    utterance.lang = 'en-US'
    utterance.rate = 0.96
    utterance.pitch = 1
    utterance.onend = () => setSpeakingKey('')
    utterance.onerror = () => setSpeakingKey('')
    setSpeakingKey(`word-${word}`)
    synth.speak(utterance)
  }

  const handleStopSpeaking = () => {
    if (!speechSupported) {
      return
    }
    window.speechSynthesis.cancel()
    setSpeakingKey('')
  }

  const handleWordClick = async (word) => {
    const normalized = normalizeWord(word)
    playWordInstant(normalized)
    setSelectedWord(normalized)

    if (wordCache[normalized]) {
      return
    }

    setWordDetailLoading(true)
    try {
      const detail = await lookupWordDetails(normalized)
      setWordCache((prev) => ({
        ...prev,
        [normalized]: {
          phonetic: detail?.phonetic || '-',
          meaning: detail?.meaning || '待补充',
        },
      }))
    } catch {
      setNotice(`查询单词失败：${normalized}`)
      setWordCache((prev) => ({
        ...prev,
        [normalized]: {
          phonetic: '-',
          meaning: '待补充',
        },
      }))
    } finally {
      setWordDetailLoading(false)
    }
  }

  const handleTranslateOneBlock = async (block) => {
    if (!currentSection) {
      return
    }

    const key = getBlockKey(currentSection.id, block.id)
    if (blockTranslationCache[key]) {
      return
    }

    setTranslatingBlocks((prev) => ({ ...prev, [key]: true }))
    setTranslationFailedBlocks((prev) => ({ ...prev, [key]: false }))
    try {
      let translated = ''
      for (let attempt = 0; attempt < 3; attempt += 1) {
        translated = await translateEnglishTextToChinese(block.en)
        if (translated) {
          break
        }
        await new Promise((resolve) => setTimeout(resolve, 450))
      }

      if (translated) {
        setBlockTranslationCache((prev) => ({ ...prev, [key]: translated }))
      } else {
        setTranslationFailedBlocks((prev) => ({ ...prev, [key]: true }))
      }
    } finally {
      setTranslatingBlocks((prev) => ({ ...prev, [key]: false }))
    }
  }

  const playWord = () => {
    if (!selectedWord) {
      return
    }
    playText(selectedWord, `word-${selectedWord}`)
  }

  if (!currentSection) {
    return <main className="reader-shell">暂无可用课文内容。</main>
  }

  return (
    <main className="reader-shell">
      <header className="book-header">
        <h1>英语课文朗读练习</h1>
        <p>
          内容来源：{READING_CONTENT.source}（页码 {READING_CONTENT.pageRange}）
        </p>
      </header>

      <section className="control-panel">
        <label className="field">
          <span>选择章节</span>
          <select
            value={sectionIndex}
            onChange={(event) => {
              setSectionIndex(Number(event.target.value))
              setNotice('')
            }}
          >
            {READING_CONTENT.sections.map((section, index) => (
              <option key={section.id} value={index}>
                {index + 1}. {section.title}
              </option>
            ))}
          </select>
        </label>

        <div className="button-row">
          <button
            className="btn primary"
            type="button"
            onClick={() => playText(sectionTextForReading, `section-${currentSection.id}`)}
          >
            朗读本节全文
          </button>
          <button className="btn secondary" type="button" onClick={handleStopSpeaking}>
            停止朗读
          </button>
        </div>

        {notice && <p className="notice">{notice}</p>}
      </section>

      <section className="book-page">
        <h2>{currentSection.title}</h2>

        <div className="page-grid">
          <article className="text-column">
            {currentSection.blocks.map((block, index) => {
              const tokens = tokenizeText(block.en)
              const blockKey = getBlockKey(currentSection.id, block.id)
              const translatedText = block.zh || blockTranslationCache[blockKey] || ''
              const shouldShowTranslation = index % 2 === 0
              const isTranslating = Boolean(translatingBlocks[blockKey])
              const translationFailed = Boolean(translationFailedBlocks[blockKey])

              return (
                <section key={block.id} className="paragraph-card">
                  <div className="paragraph-toolbar">
                    <span>段落 {index + 1}</span>
                    <button
                      className="btn tiny"
                      type="button"
                      onClick={() => playText(block.en, `block-${block.id}`)}
                    >
                      {speakingKey === `block-${block.id}` ? '朗读中...' : '朗读本段'}
                    </button>
                  </div>

                  <p className="english-paragraph">
                    {tokens.map((token, tokenIndex) => {
                      if (/^[A-Za-z]+(?:[-'][A-Za-z]+)?$/.test(token)) {
                        const normalized = normalizeWord(token)
                        const isActive = selectedWord === normalized
                        return (
                          <button
                            key={`${block.id}-${tokenIndex}`}
                            className={`word-chip ${isActive ? 'active' : ''}`}
                            type="button"
                            onClick={() => handleWordClick(token)}
                          >
                            {token}
                          </button>
                        )
                      }

                      return (
                        <span key={`${block.id}-${tokenIndex}`} className="plain-token">
                          {token}
                        </span>
                      )
                    })}
                  </p>

                  {shouldShowTranslation && (
                    <div className="translation-box">
                      <h3>中文对照</h3>
                      {translatedText ? (
                        <p>{translatedText}</p>
                      ) : (
                        <div className="translation-placeholder">
                          <p>
                            {isTranslating
                              ? '翻译生成中...'
                              : translationFailed
                                ? '翻译服务暂时不可用，请点击重试。'
                                : '该段中文正在准备中。'}
                          </p>
                          {!isTranslating && (
                            <button
                              className="btn tiny"
                              type="button"
                              onClick={() => handleTranslateOneBlock(block)}
                            >
                              立即生成翻译
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </section>
              )
            })}
          </article>

          <aside className="word-panel">
            <h3>单词信息</h3>
            {!selectedWord && <p>点击左侧英文单词，即可查看发音和意思。</p>}

            {selectedWord && (
              <div className="word-detail">
                <p className="word-title">{selectedWord}</p>
                {wordDetailLoading && <p>正在查询...</p>}

                {!wordDetailLoading && (
                  <>
                    <p>
                      <strong>音标：</strong>
                      {selectedWordDetail?.phonetic || '-'}
                    </p>
                    <p>
                      <strong>中文：</strong>
                      {selectedWordDetail?.meaning || '待补充'}
                    </p>
                    <button className="btn tiny" type="button" onClick={playWord}>
                      播放单词发音
                    </button>
                  </>
                )}
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  )
}

export default App
