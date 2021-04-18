import { QueryFormValues } from '../model/QueryForm'
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import worker from 'workerize-loader!../workers/searchWorker'

class WordFinder {
  private readonly _letters: string[];
  private readonly _maxCount: number;
  private readonly _minCount: number;
  private readonly _unique: boolean;

  constructor ({ maxCount, minCount, query, unique }: QueryFormValues) {
    this._unique = unique
    this._letters = query.split(' ')
    this._maxCount = maxCount
    this._minCount = minCount
  }

  public async Search (): Promise<string[] | undefined> {
    const query = new RegExp(`^${this.PrepareRegex()}$`, 'i')
    const instance = worker()
    return await instance.searchWords(query)
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
