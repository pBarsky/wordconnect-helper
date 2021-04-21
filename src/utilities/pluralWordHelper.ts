
export function getWordSuffix (number: number): string {
  const hundreds = number % 100
  const singles = number % 10
  if (number === 1) {
    return ''
  }
  if (hundreds >= 10 && hundreds <= 20) {
    return 'ów'
  }
  if ([2, 3, 4].includes(singles) && (hundreds > 20 || hundreds < 10)) {
    return 'y'
  }
  return 'ów'
}
