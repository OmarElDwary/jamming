import React from 'react'
import Tracklist from './Tracklist';

class SearchResults extends React.Component {
  render() {
    return (
      <div className='text-center mr-10 bg-[#629EB0] bg-opacity-35 rounded-md text-white'>
        <h2>Results</h2>
        <Tracklist tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={false} />
      </div>
    )
  }
}

export default SearchResults