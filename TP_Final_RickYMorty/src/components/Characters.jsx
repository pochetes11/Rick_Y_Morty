import { useEffect, useState } from "react";
import { useCharacter } from "../../hooks/useCharacter";
import "Charactar.css";

export function Characters() {
  const { getAllCharacter, characters, getSingleCharacter } = useCharacter();

  useEffect(() => {
    getAllCharacter();
  }, []);
  return (
    <ul>
      {characters.map((item, index) => (
        <div className="todo" key={index}>
          <article className="color">
            <div className="imagenes">
              <img src="https://rickandmortyapi.com/api/character/avatar/207.jpeg" />

              <img src="https://rickandmortyapi.com/api/character/avatar/465.jpeg" />
            </div>
            <div className="personajes">
              <h2>{item.name}</h2>

              <h4 key={index}>
                {item.status} - {item.species}
              </h4>
              <p>Ultima localización conocida</p>
              <h3>{item.location.name}</h3>
              <p>Visto por primera vez</p>
              <h3>{item.origin.name}</h3>
            </div>
          </article>
        </div>
      ))}
    </ul>
  );
}
