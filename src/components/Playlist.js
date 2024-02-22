import React from 'react';
import SaveToSpotify from "./SaveToSpotify"

class Playlist extends React.Component {
  render() {
    return (
      <div className='text-center mr-10 bg-[#192a56] bg-opacity-35 rounded-md text-white'>
        <table className='space-around'>
          <thead className='text-center font-bold'>PlayList</thead>
          <tbody>
            <tr className='justify-between'>
              <td className='px-10'>Aghla Mn AlYakout</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <SaveToSpotify />
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}

export default Playlist