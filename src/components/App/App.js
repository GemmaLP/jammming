import '../App/App.css';
import { useState } from 'react';
import searchResults from '../SearchResults/SearchResults'
import SearchResults from '../SearchResults/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([
    {id:1,
    artist: "Elton John",
    title: "Crocodile rock",
    album: "Greatest hits"
    },
    {id:2,
      artist: "Elton",
      title: "Crocodile",
      album: "Greatest hits"
      }
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <SearchResults 
          searchResults = {searchResults}
        />
      </header>
    </div>
  );
}

export default App;
