import polishWords from '../dictionaries/polish_words'

export function searchWords (query: string): string[] | undefined {
  if (!query) {
    return
  }
  const results = polishWords.filter(word => word.match(query))
  return results
}
