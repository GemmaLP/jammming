import Tracklist from '../Tracklist/Tracklist'

function SearchResults(props) {
  return (
    <div>
      <h2>Search Results</h2>
      <Tracklist tracks={props.searchResults}/>
    </div>
  )
}

export default SearchResults