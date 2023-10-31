import { useEffect } from "react";
import { useCharacter } from "../../hooks/useCharacter";
import { Header } from "./Header";

export function Characters() {
  const { getAllCharacter, characters, getSingleCharacter } = useCharacter();

  useEffect(() => {
    getAllCharacter();
  }, []);
  const getStatusColor = (status) => {
    if (status == "Alive") {
      return "vivo";
    } else if (status == "Dead") {
      return "muerto";
    } else {
      return "depa";
    }
  };
  return (
    <>
      <Header />
      <ul className="todo">
        {characters.map((item, index) => (
          <div className="fondo" key={index}>
            <li className="contenedor">
              <img className="imagenes" src={item.image} />
              <div className="personajes">
                <h2>{item.name}</h2>

                <div className="estado">
                  <div className={`status ${getStatusColor(item.status)}`}>
                    &#x25CF;
                  </div>
                  <div>
                    <h4 key={index} className="estadoH">
                      {item.status} - {item.species}
                    </h4>
                  </div>
                </div>
                <p className="last">Ultima localización conocida:</p>
                <h3>{item.location.name}</h3>
                <p className="first">Visto por primera vez:</p>
                <h3>{item.origin.name}</h3>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}
