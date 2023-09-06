import Tracklist from "../Tracklist/Tracklist"

function Playlist(props) {
  return (
    <div>
      <h2>Playlist</h2>
      <Tracklist
        tracks={props.playlistTracks}
        removeTrack={props.removeTrack}
      />
    </div>
  )
}

export default Playlist