import Tracklist from "../Tracklist/Tracklist";
import '../Playlist/Playlist.css';

function Playlist(props) {
  return (
    <div className="playlist">
      <h2>{props.playlistName}</h2>
      <input value={props.playlistName} type="text" onChange={props.changePlaylistName}/>
      <Tracklist
        tracks={props.playlistTracks}
        removeTrack={props.removeTrack}
      />
      <button className="playlistButton">Add playlist to Spotify</button>
    </div>
  )
}

export default Playlist