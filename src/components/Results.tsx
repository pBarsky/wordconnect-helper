import React from 'react'
import { List, TransitionGroup } from 'semantic-ui-react'

interface Props {
  results: string[]
}

const Results = ({ results }: Props) => {
  return (
    <TransitionGroup as={List} duration={400} divided size='huge' verticalAlign='middle'>
      {results.map(result => (
        <List.Item key={result}>
          <List.Content header={result}/>
        </List.Item>
      ))}
    </TransitionGroup>
  )
}

export default Results
