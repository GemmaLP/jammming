import '../Track/Track.css'

function Track(props) {

  return (
    <div className='track'>
      <div className='trackInfo'>
        <h3>{props.track.title}</h3>
        <hr></hr>
        <li>{props.track.artist} || {props.track.album}</li>
      </div>
      <button className="trackButton"  onClick={() => props.addTrack ?
          props.addTrack(props.track) : props.removeTrack(props.track)}>
          {props.addTrack ? '+': '-'}</button>
    </div>
  )
}

export default Track