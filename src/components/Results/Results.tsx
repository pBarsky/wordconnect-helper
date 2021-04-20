import cssClasses from './Results.module.scss'
import { Dimmer, Loader, Message, Segment } from 'semantic-ui-react'
import ResultList from './ResultList'
import NoResultsFound from './NoResultsFound'

interface Props {
  results: string[],
  isSubmitting: boolean,
  isSearched: boolean
}

const Results = ({ results, isSubmitting, isSearched }: Props) => {
  if (!isSearched) {
    return <Segment className={[cssClasses.results, cssClasses.noBorder].join(' ')}>
      <strong>Wpisz litery w formularzu powyżej, aby wyszukać wyrazy.</strong>
    </Segment>
  }

  if (isSubmitting) {
    return <Message padded className={cssClasses.segment}>
      <Dimmer active inverted>
        <Loader>Szukam...</Loader>
      </Dimmer>
    </Message>
  }

  return (
    <div className={[cssClasses.results, cssClasses.container].join(' ')}>
      {results.length > 0 ? <ResultList results={results}/> : <NoResultsFound/>}
    </div>
  )
}

export default Results
