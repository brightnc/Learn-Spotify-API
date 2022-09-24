import React, { useEffect, useState } from "react";

const SearchBar = ({ searchSpotify }) => {
  const initialSearchTerm = () =>
    String(window.localStorage.getItem("searchTerm") || "");
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  useEffect(() => {
    window.localStorage.setItem("searchTerm", searchTerm);
  }, [searchTerm]);

  async function handleSearch() {
    try {
      await searchSpotify(searchTerm);
    } catch (error) {
      console.warn(error);
      const clientId = "54b25d9e8fcd45dfb802262d09486aa2";
      const currentUrl = window.location.href;
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${currentUrl}`;
    }
  }

  async function handleKeyPress(e) {
    if (e.key === "Enter") {
      await handleSearch();
    }
  }
  return (
    <div class="SearchBar flex flex-col items-center pt-[6.94rem] mb-[6.33rem]">
      <input
        onChange={e => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        value={searchTerm}
        placeholder="Enter A Song, Album, or Artist"
        className="w-[287px] py-[.88rem] px-0 border border-solid border-white rounded-[3px] mb-9 text-[#010c3f] text-center text-base focus:outline-none"
      />
      <button onClick={handleSearch} class="SearchButton cursor-pointer w-[8.11rem] py-[.77rem] px-0 rounded-[54px] bg-black text-center text-sm transition hover:bg-transparent border-none text-white font-medium">
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
