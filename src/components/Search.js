import React from 'react'
import { IoSearch } from "react-icons/io5";

class Search extends React.Component{
  render() {
    return (
        <div className='text-[#192a56] bg-[#00a8ff] rounded-r-lg p-2.5 hover:text-[#f5f6fa] hover:bg-transparent transition'>
            <IoSearch />
        </div>
      )
  }
}

export default Search