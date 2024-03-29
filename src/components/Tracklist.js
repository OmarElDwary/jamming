import React from 'react'
import Track from './Track'

class Tracklist extends React.Component {
  render() {
    return (
      <div>
        {this.props.tracks.map(song => {
          return (
            <Track 
              key={song.id}
              track={song}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
              isRemoval={this.props.isRemoval}
            />
          )
        })}
      </div>
    )
  }
}


export default Tracklist