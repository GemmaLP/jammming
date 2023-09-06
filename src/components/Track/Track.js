

function Track(props) {

  

  return (
    <div>
      {props.tracklist.map((track) => {
        return (
          <div key={track.id}>
            {track.title}
            {track.artist}
            {track.album}
          </div>
        )
      })}
    </div>
  )
}

export default Track