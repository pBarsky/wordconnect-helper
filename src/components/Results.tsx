import React from 'react'
import { List, Message, TransitionGroup } from 'semantic-ui-react'

interface Props {
  results: string[]
}

const Results = ({ results }: Props) => {
  const containerStyle = { width: '80vw', maxWidth: '500px' }

  return (
    results.length > 0
      ? <TransitionGroup as={List} duration={400} divided size='huge' style={containerStyle}>
        {results.map(result => (
          <List.Item key={result}>
            {result}
          </List.Item>
        ))}
      </TransitionGroup>
      : <Message style={containerStyle}>
        <Message.Header>No results to show.</Message.Header>
        <Message.Content>Please search for something else.</Message.Content>
      </Message>
  )
}

export default Results
