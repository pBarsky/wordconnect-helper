import { Message } from 'semantic-ui-react'
import cssClasses from './Results.module.scss'

const NoResultsFound = () => {
  return <Message className={[cssClasses.message].join(' ')}>
    <Message.Header>Nie znaleziono wyrazów spełniających podane parametry.</Message.Header>
    <Message.Content>Spróbuj poszukać czegoś innego.</Message.Content>
  </Message>
}

export default NoResultsFound
