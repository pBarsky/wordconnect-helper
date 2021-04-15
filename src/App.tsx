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
    <div>
      <Container style={{ marginTop: '5vh', display: 'flex', justifyContent: 'center' }}>
        <QueryForm handleQuerySearch={handleQuerySearch} initialMinCount={1} initialMaxCount={5}
                   clearResults={handleResultsClear}/>
        <Results results={results}/>
      </Container>
    </div>
  )
}

export default App

// TODO: Think about swapping SemanticUI for Bootstrap
