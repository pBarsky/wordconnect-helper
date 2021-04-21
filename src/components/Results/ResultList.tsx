import { List, TransitionGroup } from 'semantic-ui-react'

interface Props {
  results: string[]
}

const ResultList = ({ results }: Props) => {
  const resultElements = results.map(result => (
    <List.Item key={result}>
      {result}
    </List.Item>
  ))

  return <TransitionGroup as={List} duration={600} animation={'fade left'} divided size='huge'>
    {resultElements}
  </TransitionGroup>
}

export default ResultList
