function cleanText(text) {
  if (typeof text !== 'string') {
    return ''
  }
  return text.replace(/\s+/g, ' ').trim()
}

async function translateByGoogle(text) {
  const q = encodeURIComponent(text)
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-CN&dt=t&q=${q}`
  const response = await fetch(url)
  if (!response.ok) {
    return ''
  }

  const data = await response.json()
  if (!Array.isArray(data) || !Array.isArray(data[0])) {
    return ''
  }

  const translated = data[0]
    .map((item) => (Array.isArray(item) ? item[0] : ''))
    .filter(Boolean)
    .join('')

  return cleanText(translated)
}

async function translateByMyMemory(text) {
  const params = new URLSearchParams({
    q: text,
    langpair: 'en|zh-CN',
  })

  const response = await fetch(`https://api.mymemory.translated.net/get?${params.toString()}`)
  if (!response.ok) {
    return ''
  }

  const data = await response.json()
  return cleanText(data?.responseData?.translatedText || '')
}

function getRequestText(req) {
  if (req.method === 'GET') {
    return req.query?.text || ''
  }

  if (req.method === 'POST') {
    if (typeof req.body === 'string') {
      return req.body
    }
    return req.body?.text || ''
  }

  return ''
}

export default async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.status(405).json({ translatedText: '', error: 'Method Not Allowed' })
    return
  }

  const sourceText = cleanText(getRequestText(req))
  if (!sourceText) {
    res.status(400).json({ translatedText: '', error: 'Empty text' })
    return
  }

  const clippedText = sourceText.slice(0, 1800)

  try {
    let translated = await translateByGoogle(clippedText)
    if (!translated) {
      translated = await translateByMyMemory(clippedText)
    }

    res.status(200).json({
      translatedText: translated || '',
      provider: translated ? 'proxy' : 'none',
    })
  } catch (error) {
    res.status(200).json({
      translatedText: '',
      error: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}
