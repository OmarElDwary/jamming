import React from 'react'
import { IoMdAdd } from "react-icons/io";

class SearchResults extends React.Component {
  render() {
    return (
      <div className='text-center mr-10 bg-[#192a56] bg-opacity-35 rounded-md text-white'>
        <table className='space-around'>
          <thead className='text-center font-bold'>Results</thead>
          <tbody>
            <tr className='justify-between'>
              <td className='px-10'>Aghla Mn AlYakout</td>
              <td className='px-10 cursor-pointer hover:border-b-2'><IoMdAdd /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default SearchResults