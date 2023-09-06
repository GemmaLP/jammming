import Track from '../Track/Track'

function SearchResults(props) {
  return (
    <div>
      <h2>Search Results</h2>
      <Track tracklist={props.searchResults}/>
    </div>
  )
}

export default SearchResults