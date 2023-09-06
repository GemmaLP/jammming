import Tracklist from '../Tracklist/Tracklist'

function SearchResults(props) {
  return (
    <div>
      <h2>Search Results</h2>
      <Tracklist
        tracks={props.searchResults}
        addTrack={props.addTrack}
      />
    </div>
  )
}

export default SearchResults