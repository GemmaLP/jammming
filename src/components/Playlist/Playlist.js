import Tracklist from "../Tracklist/Tracklist";
import '../Playlist/Playlist.css';

function Playlist(props) {
  return (
    <div className="playlist">
      <input value={props.playlistName} type="text" onChange={props.onNameChange}/>
      <Tracklist
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
      />
      <button className="playlistButton" onClick={props.onSave}>Save playlist</button>
    </div>
  )
}

export default Playlist