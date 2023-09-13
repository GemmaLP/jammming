import '../SearchBar/SearchBar.css'
import { useCallback, useEffect, useState} from 'react';

function SearchBar(props) {

  const storedTerm = window.sessionStorage.getItem('term' || "")
  const [term, setTerm] = useState(storedTerm);
  const [searchType, setSearchType] = useState("track");

 //set term in session storage to reinstate on page refresh
  useEffect(() => {
    window.sessionStorage.setItem('term', term);
  }, [term]);

  const handleTermChange = useCallback((e) => {
    e.preventDefault();
    setTerm(e.target.value);
  }, []);

  const handleSearchTypeChange = (e) => {
    e.preventDefault();
    setSearchType(e.target.value);
    console.log(searchType)
  };


  function search () {
    props.onSearch(term,searchType);
  }

  return (
    <div className="searchBar">
      <label>
        What do you want to search by?
        <select value={searchType} onChange={handleSearchTypeChange}>
          <option value="track">Song title</option>
          <option value="artist">Artist name</option>
          <option value="album">Album title</option>
        </select>
      </label>      
      <input value={term} onChange={handleTermChange} />
      <button className="searchBarButton" onClick={search}>SEARCH</button>
    </div>
  )
}

export default SearchBar