

function Track(props) {

  return (
    <div>
    {props.track.title}
    {props.track.artist}
    {props.track.album}
    <button className="addTrack"  onClick={() => props.addTrack ?
         props.addTrack(props.track) : props.removeTrack(props.track)}>
        {props.addTrack ? '+': '-'}</button>
    </div>
  )
}

export default Track