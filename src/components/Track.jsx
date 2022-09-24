import React from "react";

const Track = ({ track,isRemoval,handleTrackAction }) => {
  const RenderAction = () => {
    if (isRemoval) {
      return (
        <button onClick={() => handleTrackAction(track)} className="Track-action cursor-pointer p-2 text-[1.05rem] transition-colors border-0 bg-black text-white hover:text-c-rgba">
          -
        </button>
      );
    } else {
      return (
        <button onClick={() => handleTrackAction(track)} className="Track-action cursor-pointer p-2 text-[1.05rem] transition-colors border-0 bg-black text-white hover:text-c-rgba">
          +
        </button>
      );
    }
  };

  return (
    <div className="Track flex items-center border-b border-solid border-b-rgba">
      <div className="Track-information flex-grow flex flex-col justify-center h-[72px]">
        <h3 className="mb-[.22rem]">{track.name}</h3>
        <p className="text-sm font-light text-b-rgba">
          {track.artist} | {track.album}
        </p>
      </div>
      <RenderAction/>
    </div>
  );
};

export default Track;
