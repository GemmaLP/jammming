import '../SearchBar/SearchBar.css'
import { useCallback, useState} from 'react';

function SearchBar(props) {

  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((e) => {
    e.preventDefault();
    setTerm(e.target.value);
  }, []);

  function search () {
    props.onSearch(term);
  }

  return (
    <div className="searchBar">
      <input placeholder="Search by song title"onChange={handleTermChange} />
      <button className="searchBarButton" onClick={search}>SEARCH</button>
    </div>
  )
}

export default SearchBar