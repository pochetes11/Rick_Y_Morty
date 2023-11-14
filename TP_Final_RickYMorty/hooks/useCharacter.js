import { useState } from "react";

export function useCharacter() {
  const [characters, setcharacters] = useState([]);

  const getAllCharacter = () => {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setcharacters(data.results));
  };

  const getAllEpisodes = () => {
    fetch(`https://rickandmortyapi.com/api/episode/${palito}`)
      .then((response) => response.json())
      .then((data) => setcharacters(data.results));

    console.log(data);
  };

  return {
    characters,
    getAllCharacter,
  };
}
