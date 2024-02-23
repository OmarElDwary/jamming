import React from 'react'
import { IoMdAdd } from "react-icons/io";

class SearchResults extends React.Component {
  render() {
    return (
      <div className='text-center mr-10 bg-[#629EB0] bg-opacity-35 rounded-md text-white'>
        <table className='space-around'>
          <thead className='text-center font-bold'>Results</thead>
          <tbody>
            <tr className='justify-between'>
              <td className='px-10'>Aghla Mn AlYakout</td>
              <td className='px-10 cursor-pointer'><IoMdAdd className='hover:border-b-2 border-[#09BC8A]' /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default SearchResults