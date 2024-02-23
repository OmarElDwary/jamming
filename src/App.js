import React from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import PlayList from "./components/Playlist";


class App extends React.Component {
  render() {
    return (
      <div className="mx-0 bg-[#004346] justify-center">
        <header className="bg-[#058068] text-[#629EB0] text-center py-2 items-center font-bold mb-10 shadow-sm">
          Jamming
        </header>
        <SearchBar />

        <div className="flex flex-row space-between justify-center text-center items-start mx-auto">
          <SearchResults />
          <PlayList />
        </div>
      </div>
    );
  }
}

export default App;
