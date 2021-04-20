import { useState } from 'react'
import { Container } from 'semantic-ui-react'
import QueryForm from './forms/queryForm/QueryForm'
import Results from './components/Results/Results'
import WordFinder from './utilities/WordFinder'
import { QueryFormValues } from './model/QueryForm'

function App () {
  const [results, setResults] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSearched, setIsSearched] = useState(false)

  const handleResultsAdd = (result: string) => {
    setResults(oldState => [...oldState, result])
  }

  const handleQuerySearch = (values: QueryFormValues, markCompletion: () => void) => {
    const wf = new WordFinder(values)
    wf.Search().then(words => {
      words?.forEach(handleResultsAdd)
      markCompletion()
      setIsSubmitting(false)
    })
  }

  const handleResultsClear = () => {
    setIsSearched(true)
    setResults([])
  }

  return (
    <Container style={{
      marginTop: '5vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <QueryForm handleQuerySearch={handleQuerySearch} initialMinCount={3} initialMaxCount={7}
                 clearResults={handleResultsClear} setSubmitting={setIsSubmitting}/>
      <Results results={results} isSubmitting={isSubmitting} isSearched={isSearched}/>
    </Container>
  )
}

export default App
