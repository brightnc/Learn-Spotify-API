import React from "react";
import Track from "./Track";


const SearchResults = ({tracks,addTrackToPlaylist}) => {
  return (
    <div className="SearchResults w-6/12 h-[950px] overflow-y-scroll p-[.88rem] bg-purple-rgba shadow-md shadow-[#000000]">
      <h2>Results </h2>
      <div className="TrackList w-full">
      {
        tracks.map(track => {
          return ( <Track key={track.id} track={track} isRemoval={false} handleTrackAction={addTrackToPlaylist}/>)
        })
      }
    </div>
      
    </div>
  );
};

export default SearchResults;
