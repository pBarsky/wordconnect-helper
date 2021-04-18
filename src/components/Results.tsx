import React from 'react'
import { List, Message, TransitionGroup } from 'semantic-ui-react'

interface Props {
  results: string[],
  isSubmitting: boolean,
  isSearched: boolean
}

const Results = ({ results, isSubmitting, isSearched }: Props) => {
  const containerStyle = { width: '80vw', maxWidth: '500px' }

  const messageHeader = isSubmitting ? 'Szukam...' : 'Nie znaleziono wyrazów spełniających podane parametry.'
  const messageContent = isSubmitting ? '' : 'Spróbuj poszukać czegoś innego.'

  if (!isSearched) {
    return <Message>
      Wpisz litery w formularzu powyżej, aby wyszukać wyrazy.
    </Message>
  }

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
        <Message.Header>{messageHeader}</Message.Header>
        <Message.Content>{messageContent}</Message.Content>
      </Message>
  )
}

export default Results
