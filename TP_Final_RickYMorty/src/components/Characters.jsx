import { useEffect, useState } from "react";
import { useCharacter } from "../../hooks/useCharacter";

export function Characters() {
  const { getAllCharacter, characters, getSingleCharacter } = useCharacter();

  useEffect(() => {
    getAllCharacter;
  }, []);
  return (
    <ul>
      {characters.map((item, index) => (
        <div className="todo" key={index}>
          <article className="color">
            <img src={item.image} />
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

export default Characters;
