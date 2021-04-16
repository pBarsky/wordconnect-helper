import { QueryFormValues } from '../model/QueryForm'

interface Props {
  addResult(res: string): void
}

class WordFinder {
  private readonly _letters: string[];
  private readonly _maxCount: number;
  private readonly _minCount: number;
  private readonly _unique: boolean;
  private _addResult: (res: string) => void;

  constructor ({ maxCount, minCount, query, unique }: QueryFormValues, { addResult }: Props) {
    this._unique = unique
    this._addResult = addResult
    this._letters = query.split(' ')
    this._maxCount = maxCount
    this._minCount = minCount
  }

  public Search (): void {
    const query = new RegExp(`^${this.PrepareRegex()}$`, 'i')
    // @ts-ignore
    window.POLISH_WORDS.forEach(word => {
      if (word.match(query)) {
        this._addResult(word)
      }
    })
  }

  private PrepareRegex (): string {
    let res = `${this._unique ? '(?!.*(.).*\\1)' : ''}[`
    this._letters.forEach(letter => {
      res += `${letter}`
    })
    res += `]{${this._minCount},${this._maxCount}}`
    return res
  }
}

export default WordFinder
