import React from 'react';
import SaveToSpotify from "./SaveToSpotify"

class Playlist extends React.Component {
  render() {
    return (
      <div className='text-center mr-10 bg-[#629EB0] bg-opacity-35 rounded-md text-white'>
        <input defaultValue={"New Playlist"} className="m-1 rounded-md" />
        <SaveToSpotify />
      </div>
    )
  }
}

export default Playlist