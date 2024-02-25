import React from 'react';
import Tracklist from './Tracklist';

class Playlist extends React.Component {
  constructor(props) {
    super(props)
    this.handleNameChange=this.handleNameChange.bind(this)
  }
  handleNameChange(ev) {
    this.props.onNameChange(ev.target.value)
  }
  render() {
    return (
      <div className='text-center mr-10 bg-[#629EB0] bg-opacity-35 rounded-md text-white h-full'>
        <input defaultValue={"New Playlist"} className="m-1 rounded-md text-[#629EB0] text-center" onChange={this.handleNameChange} />
        <Tracklist tracks={this.props.playListTracks} isRemoval={true} onRemove={this.props.onRemove} />
        <div className='my-1'>
          <button className='bg-[#44bd32] rounded-md text-[#f5f6fa] px-1 hover:bg-[#1FC295]' onClick={this.props.onSave}>
            Save To Spotify
          </button>
        </div>
      </div>
    )
  }
}

export default Playlist