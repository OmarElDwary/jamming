import React from 'react';
import { IoSearch } from "react-icons/io5";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state= { term: "" };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  search() {
    this.props.onSearch(this.state.term);
  }
  handleTermChange(ev) {
    this.setState({ term: ev.target.value });
  }
  render() {
    return (
      <div className='justify-center items-center text-center flex flex-row'>
        <input 
          type="text" 
          placeholder='Enter Artist, Album or Song name' 
          className='border-lg rounded-l-lg px-4 py-1 my-10 text-[#058068] border-slate-100 border-2 w-96' 
          onChange={this.handleTermChange}
        />
        <div className='text-[#f5f6fa] bg-[#44bd32] rounded-r-lg p-2.5 hover:bg-transparent transition' onClick={this.search}>
            <IoSearch />
        </div>
      </div>
    );
  }
}

export default SearchBar;
