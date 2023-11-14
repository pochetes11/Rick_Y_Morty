import { useEffect } from "react";
import { useCharacter } from "../../hooks/useCharacter";
import { Header } from "./Header";

export function Characters() {
  const { getAllCharacter, characters, getSingleCharacter } = useCharacter();

  const palito = [];

  function episodio(episodios) {
    episodios.map((item) => {
      const numero = item.slice(40);
      palito.push(numero);
    });
    console.log(palito);
  }

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
                <div className="color-vivo">
                  <p className="last">Ultima localización conocida:</p>
                  <h3>{item.location.name}</h3>
                  <div className="episodios">
                    <p onClick={() => episodio(item.episode)} className="first">
                      Episodios
                    </p>
                  </div>
                  <h3></h3>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}
