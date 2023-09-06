import Tracklist from "../Tracklist/Tracklist";
import '../Playlist/Playlist.css';

function Playlist(props) {
  return (
    <div className="playlist">
      <h2>Playlist</h2>
      <Tracklist
        tracks={props.playlistTracks}
        removeTrack={props.removeTrack}
      />
    </div>
  )
}

export default Playlist