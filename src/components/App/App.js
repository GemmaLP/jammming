import '../App/App.css';
import { useState } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';

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
  const [playlistTracks, setPlaylistTracks] = useState([]);

  function addTrack (newTrack) {
    if (!playlistTracks.some((track) => newTrack.id === track.id)) {
      setPlaylistTracks((prevTracks) => [...prevTracks, newTrack]);
      }
    }

  function removeTrack (oldTrack) {
    setPlaylistTracks((prevTracks) => { 
      return prevTracks.filter((track) => track.id !== oldTrack.id)
    })
  }

  function changePlaylistName (e) {
    e.preventDefault();
    setPlaylistName(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>JAMMMING</h1>
      </header>
        <SearchBar />
        <SearchResults 
          searchResults = {searchResults}
          addTrack ={addTrack}
        />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          removeTrack={removeTrack}
          changePlaylistName={changePlaylistName}
        />
    </div>
  );
}

export default App;
