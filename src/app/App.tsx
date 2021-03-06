import { useState } from 'react'
import { Container, Header } from 'semantic-ui-react'
import Results from '../components/Results/Results'
import QueryForm from '../forms/queryForm/QueryForm'
import { QueryFormValues } from '../model/QueryForm'
import WordFinder from '../utilities/WordFinder'
import style from './App.module.scss'

function App () {
  const [results, setResults] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSearched, setIsSearched] = useState(false)

  const handleResultsAdd = (result: string) => {
    setResults((oldState) => [...oldState, result])
  }

  const handleQuerySearch = async (
    values: QueryFormValues,
    markCompletion: () => void
  ) => {
    const wf = new WordFinder(values)
    for await (const word of wf.SearchGenerator()) {
      setIsSubmitting(false)
      if (word) {
        handleResultsAdd(word)
      }
    }
    markCompletion()
  }

  const handleResultsClear = () => {
    setIsSearched(true)
    setResults([])
  }

  return (
    <Container className={style.container}>
      <Header content='WordConnect Helper' size={'huge'} />
      <QueryForm
        handleQuerySearch={handleQuerySearch}
        initialMinCount={3}
        initialMaxCount={7}
        clearResults={handleResultsClear}
        setSubmitting={setIsSubmitting}
      />
      <Results
        results={results}
        isSubmitting={isSubmitting}
        isSearched={isSearched}
      />
    </Container>
  )
}

export default App
