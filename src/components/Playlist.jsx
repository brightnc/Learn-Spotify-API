import React, { useState } from "react";
import Track from "./Track";


const Playlist = ({tracks, removeTrackFromPlaylist,createSpotifyPlaylist}) => {
  const [playlistName, setPlaylistName] = useState("My Playlist");

  async function handleSave() {
    const trackIds = tracks.map(t => t.id)
    createSpotifyPlaylist(playlistName, trackIds)
}
  return (
    <div className="Playlist flex flex-col items-center overflow-y-scroll w-[37%] max-h-[950px] py-[2.27rem] px-[1.16rem] bg-purple-rgba shadow-md shadow-[#000000]">
      <input  onChange={e => setPlaylistName(e.target.value)}  placeholder={playlistName} className="w-full border-0 outline-0 bg-transparent border-b border-solid border-[#6f6f6f] font-[Poppins] text-2xl text-white" />
      <div className="TrackList w-full">
      {
        tracks.map(track => {
          return ( <Track key={track.id} track={track}  isRemoval={true} handleTrackAction={removeTrackFromPlaylist}/>)
        })
      }
    </div>
      <button  onClick={handleSave} className="Playlist-save cursor-pointer w-40 py-[.77rem] px-0 rounded-[54px] border-0 mt-5 bg-black text-center text-[.83rem] transition hover:bg-transparent text-white font-medium">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
