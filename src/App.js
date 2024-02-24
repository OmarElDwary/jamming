import React from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import PlayList from "./components/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          id: 1,
          name: "Test Track1",
          artist: "Test Artist1",
          album: "Test Album1",
        },
        {
          id: 2,
          name: "Test Track2",
          artist: "Test Artist2",
          album: "Test Album2",
        },
        {
          id: 3,
          name: "Test Track3",
          artist: "Test Artist3",
          album: "Test Album3",
        },
        {
          id: 4,
          name: "Test Track4",
          artist: "Test Artist4",
          album: "Test Album4",
        }
      ],
      playListName: "Example",
      playListTracks: [
        {
          id: 1,
          name: "Test Track1",
          artist: "Test Artist1",
          album: "Test Album1",
        },
        {
          id: 2,
          name: "Test Track2",
          artist: "Test Artist2",
          album: "Test Album2",
        },
        {
          id: 3,
          name: "Test Track3",
          artist: "Test Artist3",
          album: "Test Album3",
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  addTrack(track) {
    const foundTrack = this.state.playListTracks.find(
      (playListTrack) => playListTrack.id === track.id
    );
    const newTrack = this.state.playListTracks.concat(track);
    foundTrack? alert("Track Exists") : this.setState({ playListTracks: newTrack});
  }
  removeTrack(track) {
    const isPresent = this.state.playListTracks.filter(playListTrack => playListTrack.id !== track.id);
    this.setState({ playListTracks: isPresent })
  }
  render() {
    return (
      <div className="mx-0 bg-[#004346] justify-center">
        <header className="bg-[#058068] text-[#f5f6fa] text-center py-2 items-center font-bold mb-10 shadow-sm">
          Jamming
        </header>
        <SearchBar />

        <div className="flex flex-row space-between justify-center text-center items-start mx-auto">
          <SearchResults
            searchResults={this.state.searchResults}
            onAdd={this.addTrack}
          />
          <PlayList
            playListName={this.state.playListName}
            playListTracks={this.state.playListTracks}
            onRemove={this.removeTrack}
          />
        </div>
      </div>
    );
  }
}

export default App;