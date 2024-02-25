import React from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import PlayList from "./components/Playlist";
import { Spotify } from "./util/spotify";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playListName: "Example",
      playListTracks: [],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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
  updatePlaylistName(name) {
    this.setState({ playListName: name })
  }
  savePlaylist() {
    const trackURIs = this.state.playListTracks.map((track) => track.uri);
    const name = this.state.playListName;
    Spotify.savePlaylistName(name, trackURIs).then(() => {
      this.setState({
        playListName: "New Playlist",
        playListTracks: []
      })
    })
  }
  search(term) {
    Spotify.search(term).then((result) =>  {
      this.setState({ searchResults: result })
    })
    console.log(term)
  }
  render() {
    return (
      <div className="mx-0 bg-[#004346] justify-center min-h-screen">
        <header className="bg-[#058068] text-[#f5f6fa] text-center py-2 items-center font-bold mb-10 shadow-sm">
          Jamming
        </header>
        <SearchBar onSearch={this.search} />

        <div className="flex flex-row space-between justify-center text-center items-start mx-auto">
          <SearchResults
            searchResults={this.state.searchResults}
            onAdd={this.addTrack}
          />
          <PlayList
            playListName={this.state.playListName}
            playListTracks={this.state.playListTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}
          />
        </div>
      </div>
    );
  }
}

export default App;