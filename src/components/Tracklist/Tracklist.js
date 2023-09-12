import Track from "../Track/Track"

function Tracklist(props) {
  return (
    <div>
      {props.tracks.map((track) => {
        return (
          <Track
          key={track.id}
          track={track}
          onAdd={props.onAdd}
          onRemove={props.onRemove}
          />
        )  
      })}
    </div>
  )
}

export default Tracklist