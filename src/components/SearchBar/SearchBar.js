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

  function search () {
    props.onSearch(term);
  }

  return (
    <div className="searchBar">
      <input value={term} onChange={handleTermChange} />
      <button className="searchBarButton" onClick={search}>SEARCH</button>
    </div>
  )
}

export default SearchBar