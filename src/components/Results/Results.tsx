import cssClasses from './Results.module.scss'
import { Dimmer, Header, Loader, Message, Segment } from 'semantic-ui-react'
import ResultList from './ResultList'
import NoResultsFound from './NoResultsFound'
import { getWordSuffix } from '../../utilities/pluralWordHelper'

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
    return <Message className={cssClasses.segment}>
      <Dimmer active inverted>
        <Loader>Szukam...</Loader>
      </Dimmer>
    </Message>
  }

  return (
    <div className={cssClasses.results}>
      <Header size="medium">Znalazłem {results.length} wyraz{getWordSuffix(results.length)}.</Header>
      <ResultList results={results}/>
      {results.length <= 0 && <NoResultsFound/>}
    </div>
  )
}

export default Results
