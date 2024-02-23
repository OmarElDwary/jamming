import React from 'react'
import { IoSearch } from "react-icons/io5";

class Search extends React.Component{
  render() {
    return (
        <div className='text-[#f5f6fa] bg-[#44bd32] rounded-r-lg p-2.5 hover:bg-transparent transition'>
            <IoSearch />
        </div>
      )
  }
}

export default Search