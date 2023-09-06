

function Track(props) {

  return (
    <div>
    {props.track.title}
    {props.track.artist}
    {props.track.album}
    </div>
  )
}

export default Track