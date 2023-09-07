import '../SearchBar/SearchBar.css'

function SearchBar() {
  return (
    <div className="searchBar">
      <h2>Search for songs</h2>
      <input placeholder="Search by song title"/>
      <button className="searchBarButton">Search</button>
    </div>
  )
}

export default SearchBar