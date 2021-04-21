import polishWords from '../dictionaries/polish_words'

export function searchWords (query: string, lastIndex: number): [word: string, lastIndex: number] | undefined {
  if (!query) {
    return
  }
  for (let i = lastIndex; i < polishWords.length; i++) {
    if (polishWords[i].match(query)) {
      return [polishWords[i], i + 1]
    }
  }
  return ['', -1]
}
