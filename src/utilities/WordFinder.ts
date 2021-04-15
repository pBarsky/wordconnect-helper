import { polishWords } from '../dictionaries/polish_words'
import { QueryFormValues } from '../model/QueryForm'

interface Props {
  addResult: (result: string) => void
}

class WordFinder {
  private readonly _letters: string[];
  private readonly _addResult: (result: string) => void;
  private readonly _maxCount: number;
  private readonly _minCount: number;

  constructor ({ maxCount, minCount, query }: QueryFormValues, { addResult }: Props) {
    this._letters = query.split(' ')
    this._maxCount = maxCount
    this._minCount = minCount
    this._addResult = addResult
  }

  public Search (): void {
    const query = new RegExp(`^${this.PrepareRegex()}$`, 'i')
    let word = ''
    for (let i = 0; i < polishWords.length; i++) {
      word = polishWords[i]
      if (word.match(query)) {
        this._addResult(word)
      }
    }
  }

  private PrepareRegex (): string {
    let res = '(?!.*(.).*\\1)['
    this._letters.forEach(letter => {
      res += `${letter}`
    })
    res += `]{${this._minCount},${this._maxCount}}`
    return res
  }
}

export default WordFinder
