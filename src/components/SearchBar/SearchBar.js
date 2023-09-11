import '../SearchBar/SearchBar.css'
import { useCallback, useState} from 'react';

function SearchBar(props) {

  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
      props.onSearch(term);
    }, [props, term]);

  return (
    <div className="searchBar">
      <h2>Search for songs</h2>
      <input placeholder="Search by song title"onChange={handleTermChange}/>
      <button className="searchBarButton" onClick={search}>Search</button>
    </div>
  )
}

export default SearchBar