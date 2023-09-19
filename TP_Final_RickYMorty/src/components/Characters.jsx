import { useEffect, useState } from "react";

export function Characters() {
  const [characters, setcharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => console.log(data.results));
  }, []);
  return;
  <>
    <ul>
      {characters.map((item, index) => (
        <li key={index}>
          <h3>{item.name}</h3>
          <p>{item.status}</p>
          <img src={item.image} />
        </li>
      ))}
    </ul>
  </>;
}

export default Characters;
