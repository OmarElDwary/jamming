import React from 'react'
import { IoMdAdd , IoIosRemoveCircleOutline } from "react-icons/io";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  } 
  renderAction() {
    if (this.props.isRemoval) {
      return <IoIosRemoveCircleOutline className='hover:border-b-2 border-[#09BC8A] cursor-pointer' onClick={this.removeTrack} />;
    } else {
      return <IoMdAdd className='hover:border-b-2 border-[#09BC8A] cursor-pointer' onClick={this.addTrack} />;
    }
  }
  addTrack() {
    this.props.onAdd(this.props.track);
  }
  removeTrack() {
    this.props.onRemove(this.props.track)
  }
  render() {
    return (
      <div className='space-between text-white flex flex-row items-center border-b-2'>
        <div className='flex-col items-start'>
          <h2 className='font-bold'>{this.props.track.name}</h2>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <div className='items-end'>
          {this.renderAction()}
        </div>
      </div>
    )
  }
}

export default Track