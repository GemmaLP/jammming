import '../Track/Track.css'

function Track(props) {

  return (
    <div className='track'>
      <div className='trackInfo'>
        <h3>{props.track.title}</h3>
        <li>{props.track.artist}</li>
        <li>{props.track.album}</li>
      </div>
      {/* set button to add or remove track dependent on props passed in */}
      <button className="trackButton"  onClick={() => props.onAdd ?
          props.onAdd(props.track) : props.onRemove(props.track)}>
          {props.onAdd ? '+': '-'}</button>
    </div>
  )
}

export default Track