import '../App/App.css';
import { useState } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

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
  const [playlistName, setPlaylistName] = useState("Playlist name");
  const [playlistTracks, setPlaylistTracks] = useState([    {id:1,
    artist: "Elton John",
    title: "Crocodile rock",
    album: "Greatest hits"
    },
    {id:2,
      artist: "Elton",
      title: "Crocodile",
      album: "Greatest hits"
      }]);


  return (
    <div className="App">
      <header className="App-header">
        <h1>JAMMMING</h1>
        <SearchResults 
          searchResults = {searchResults}
        />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
        />
      </header>
    </div>
  );
}

export default App;
