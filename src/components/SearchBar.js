import React from 'react'
import Search from "./Search"
class SearchBar extends React.Component {
  render() {
    return (
      <div className='justify-center items-center text-center flex flex-row'>
        <input type="text" placeholder='Enter Artist, Album or Song name' className='border-lg rounded-l-lg px-20 py-1 my-10 text-[#058068] border-slate-100 border-2' />
        <Search />
      </div>
    )
  }
}

export default SearchBar;