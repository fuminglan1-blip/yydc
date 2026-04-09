const POSSIBLE_HEADERS = new Set(['word', 'words', 'english', '单词'])

function cleanText(text) {
  return text.replace(/^\uFEFF/, '')
}

function normalizeCellValue(value) {
  return value.trim()
}

function readFirstCsvCell(line) {
  let cell = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i]

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cell += '"'
        i += 1
      } else {
        inQuotes = !inQuotes
      }
      continue
    }

    if (char === ',' && !inQuotes) {
      break
    }

    cell += char
  }

  return normalizeCellValue(cell)
}

export function parseManualWords(text) {
  return cleanText(text)
    .split(/[\r\n,;]+/)
    .map(normalizeCellValue)
    .filter(Boolean)
}

export function parseTxtWords(text) {
  return cleanText(text)
    .split(/\r?\n/)
    .map(normalizeCellValue)
    .filter(Boolean)
}

export function parseCsvFirstColumn(text) {
  const lines = cleanText(text).split(/\r?\n/)
  const words = []

  lines.forEach((line, index) => {
    if (!line.trim()) {
      return
    }

    const firstCell = readFirstCsvCell(line)
    if (!firstCell) {
      return
    }

    if (index === 0 && POSSIBLE_HEADERS.has(firstCell.toLowerCase())) {
      return
    }

    words.push(firstCell)
  })

  return words
}
