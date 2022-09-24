import React, { useEffect, useState } from "react";
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Spotify from "./utils/Spotify";

function App() {
  const [searchedTracks, setSearchedTracks] = useState([]);

  const [playlistTracks, setPlaylistTracks] = useState([]);

  const [spotifyToken, setSpotifyToken] = useState(null);

  useEffect(() => {
    const spotifyTokenFromUrlFragment = window.location.hash
      .split("&")[0]
      .substr(14);
    setSpotifyToken(spotifyTokenFromUrlFragment);
  }, []);

  async function searchSpotify(searchTerms) {
    const results = await Spotify.search(searchTerms, spotifyToken);
    setSearchedTracks(results);
  }

  async function createSpotifyPlaylist(name, trackIds) {
    await Spotify.createPlaylist(name, trackIds, spotifyToken);
    setPlaylistTracks([]);
  }

  function addTrackToPlaylist(track) {
    setPlaylistTracks((oldPlaylistTracks) => {
      if (oldPlaylistTracks.includes(track)) {
        return oldPlaylistTracks;
      } else {
        return [...oldPlaylistTracks, track];
      }
    });
  }

  function removeTrackFromPlaylist(track) {
    setPlaylistTracks((oldPlaylistTracks) =>
      oldPlaylistTracks.filter((t) => track !== t)
    );
  }
  return (
    <div>
      <h1 className="p-3 bg-black text-center font-[Poppins] text-3xl text-white">
        Ja<span className="text-zinc-400">mmm</span>ing
      </h1>
      <div className="h-full pt-0 pb-[10%] px-[17%] bg-pic-desktop bg-cover bg-center bg-no-repeat font-[Work Sans] font-medium text-white">
        <SearchBar searchSpotify={searchSpotify} />
        <div className="App-playlist flex justify-between w-full">
          <SearchResults
            tracks={searchedTracks}
            addTrackToPlaylist={addTrackToPlaylist}
          />
          <Playlist
            tracks={playlistTracks}
            removeTrackFromPlaylist={removeTrackFromPlaylist}
            createSpotifyPlaylist={createSpotifyPlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
