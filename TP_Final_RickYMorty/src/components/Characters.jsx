import { useEffect } from "react";
import { useCharacter } from "../../hooks/useCharacter";

export function Characters() {
  const { getAllCharacter, characters, getSingleCharacter } = useCharacter();

  useEffect(() => {
    getAllCharacter();
  }, []);
  return (
    <>
      <div className="titulo">Rick y Morty API</div>
      <ul className="todo">
        {characters.map((item, index) => (
          <li className="contenedor" key={index}>
            <img className="imagenes" src={item.image} />
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
          </li>
        ))}
      </ul>
    </>
  );
}
