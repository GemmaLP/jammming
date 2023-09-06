import Tracklist from "../Tracklist/Tracklist"

function Playlist(props) {
  return (
    <div>
      <h2>Playlist</h2>
      <Tracklist tracks={props.playlistTracks} />
    </div>
  )
}

export default Playlist