import Tracklist from "../Tracklist/Tracklist";
import '../Playlist/Playlist.css';

function Playlist(props) {
  return (
    <div className="playlist">
      <h2>{props.playlistName}</h2>
      <input value={props.playlistName} type="text" onChange={props.onNameChange}/>
      <Tracklist
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
      />
      <button className="playlistButton" onClick={props.onSave}>Save playlist to Spotify</button>
    </div>
  )
}

export default Playlist