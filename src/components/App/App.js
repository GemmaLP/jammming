import '../App/App.css';
import { useState } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import Spotify from '../../util/spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("Playlist name");
  const [playlistTracks, setPlaylistTracks] = useState([]);


  function addTrack (trackToAdd) {
    if (!playlistTracks.some((track) => trackToAdd.id === track.id)) {
      setPlaylistTracks((prevTracks) => [...prevTracks, trackToAdd]);
      }
    }

  function removeTrack (trackToRemove) {
    setPlaylistTracks((prevTracks) => { 
      return prevTracks.filter((track) => track.id !== trackToRemove.id)
    })
  }

  function changePlaylistName (e) {
    e.preventDefault();
    setPlaylistName(e.target.value);
  }

  function savePlaylist () {
    const trackUris = playlistTracks.map((track) => track.uri);
    const name = playlistName;
    Spotify.savePlaylist(name, trackUris).then(()=> {
      setPlaylistName("new playlist");
      setPlaylistTracks([]);
      setSearchResults([]);
    })
  }

  function search (term, searchType) {
    Spotify.search(term, searchType).then(result => setSearchResults(result))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>JAMMMING</h1>
      </header>
        <SearchBar onSearch={search}/>
        <SearchResults 
          searchResults = {searchResults}
          onAdd ={addTrack}
        />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onRemove={removeTrack}
          onNameChange={changePlaylistName}
          onSave={savePlaylist}
        />
    </div>
  );
}

export default App;
