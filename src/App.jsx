import { useEffect, useMemo, useRef, useState } from 'react'
import { READING_CONTENT } from './data/readingPassages'
import { lookupWordDetails } from './utils/dictionaryLookup'

const WORD_CACHE_KEY = 'reading-practice-word-cache-v1'

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

function readWordCache() {
  try {
    const raw = localStorage.getItem(WORD_CACHE_KEY)
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

function App() {
  const [sectionIndex, setSectionIndex] = useState(0)
  const [wordCache, setWordCache] = useState(() => readWordCache())
  const [selectedWord, setSelectedWord] = useState('')
  const [wordDetailLoading, setWordDetailLoading] = useState(false)
  const [speechSupported, setSpeechSupported] = useState(false)
  const [speakingKey, setSpeakingKey] = useState('')
  const [notice, setNotice] = useState('')
  const sectionRefs = useRef(new Map())

  const sections = READING_CONTENT.sections
  const currentSection = sections[sectionIndex]

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
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

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

  const fullTextForReading = useMemo(() => {
    return sections.flatMap((section) => section.blocks.map((block) => block.en)).join(' ')
  }, [sections])

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

  const handleSectionChange = (nextIndex) => {
    const index = Number(nextIndex)
    setSectionIndex(index)
    setNotice('')

    const targetSection = sections[index]
    if (!targetSection) {
      return
    }

    requestAnimationFrame(() => {
      const targetNode = sectionRefs.current.get(targetSection.id)
      if (targetNode) {
        targetNode.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  }

  const playWordAgain = () => {
    if (!selectedWord) {
      return
    }
    playWordInstant(selectedWord)
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
          <span>选择章节（页面会自动跳转到该章节）</span>
          <select value={sectionIndex} onChange={(event) => handleSectionChange(event.target.value)}>
            {sections.map((section, index) => (
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
            朗读当前章节
          </button>
          <button className="btn primary" type="button" onClick={() => playText(fullTextForReading, 'all')}>
            朗读全部内容
          </button>
          <button className="btn secondary" type="button" onClick={handleStopSpeaking}>
            停止朗读
          </button>
        </div>

        {notice && <p className="notice">{notice}</p>}
      </section>

      <section className="book-page">
        <div className="page-grid">
          <article className="text-column">
            {sections.map((section) => (
              <section
                key={section.id}
                className="chapter-card"
                ref={(node) => {
                  if (node) {
                    sectionRefs.current.set(section.id, node)
                  } else {
                    sectionRefs.current.delete(section.id)
                  }
                }}
              >
                <h2>{section.title}</h2>

                {section.blocks.map((block, index) => {
                  const tokens = tokenizeText(block.en)
                  const translatedText = block.zh || '（暂无翻译）'

                  return (
                    <section key={`${section.id}-${block.id}`} className="paragraph-card">
                      <div className="paragraph-toolbar">
                        <span>段落 {index + 1}</span>
                        <button
                          className="btn tiny"
                          type="button"
                          onClick={() => playText(block.en, `block-${section.id}-${block.id}`)}
                        >
                          {speakingKey === `block-${section.id}-${block.id}` ? '朗读中...' : '朗读本段'}
                        </button>
                      </div>

                      <p className="english-paragraph">
                        {tokens.map((token, tokenIndex) => {
                          if (/^[A-Za-z]+(?:[-'][A-Za-z]+)?$/.test(token)) {
                            const normalized = normalizeWord(token)
                            const isActive = selectedWord === normalized
                            return (
                              <button
                                key={`${section.id}-${block.id}-${tokenIndex}`}
                                className={`word-chip ${isActive ? 'active' : ''}`}
                                type="button"
                                onClick={() => handleWordClick(token)}
                              >
                                {token}
                              </button>
                            )
                          }

                          return (
                            <span key={`${section.id}-${block.id}-${tokenIndex}`} className="plain-token">
                              {token}
                            </span>
                          )
                        })}
                      </p>

                      <div className="translation-box">
                        <h3>中文对照</h3>
                        <p>{translatedText}</p>
                      </div>
                    </section>
                  )
                })}
              </section>
            ))}
          </article>

          <aside className="word-panel">
            <h3>单词信息</h3>
            {!selectedWord && <p>点击左侧英文单词，即可立即发音并查看音标和中文意思。</p>}

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
                    <button className="btn tiny" type="button" onClick={playWordAgain}>
                      再读一次单词
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
