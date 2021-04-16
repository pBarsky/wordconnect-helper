import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import QueryForm from './forms/QueryForm'
import Results from './components/Results'
import WordFinder from './utilities/WordFinder'
import { QueryFormValues } from './model/QueryForm'

function App () {
  const [results, setResults] = useState<string[]>([])

  const handleResultsAdd = (result: string) => {
    setResults(oldState => [...oldState, result])
  }

  const handleQuerySearch = (values: QueryFormValues) => {
    const wf = new WordFinder(values, { addResult: handleResultsAdd })
    wf.Search()
  }

  const handleResultsClear = () => {
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
                 clearResults={handleResultsClear}/>
      <Results results={results}/>
    </Container>
  )
}

export default App
