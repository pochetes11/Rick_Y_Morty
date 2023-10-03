import { useState } from "react";

export function useCharacter(){
     
    const [characters, setcharacters] = useState([]);


    const getAllCharacter = () => {
       return fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setcharacters(data.results));
        };

        return{
            characters,
            getAllCharacter,
        };
}