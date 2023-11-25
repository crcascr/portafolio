import foto from "../images/Foto.png";
import linkedin from "../images/redes/linkedin.svg";
import github from "../images/redes/github.svg";
import githubBlanco from "../images/redes/github-blanco.svg";
import x from "../images/redes/x.svg";
import xBlanco from "../images/redes/x-blanco.svg";
import instagram from "../images/redes/instagram.svg";

function Intro(props) {
  const objetoRedes = [
    {
      nombre: "LinkedIn",
      icono: linkedin,
      enlace: "https://www.linkedin.com/in/crcascr/",
    },
    {
      nombre: "GitHub",
      icono: `${props.modoOscuro ? githubBlanco : github}`,
      enlace: "https://github.com/crcascr/",
    },
    {
      nombre: "X",
      icono: `${props.modoOscuro ? xBlanco : x}`,
      enlace: "https://twitter.com/crcascr",
    },
    {
      nombre: "Instagram",
      icono: instagram,
      enlace: "https://www.instagram.com/cristiancastill0/",
    },
  ];

  const elementosRedes = objetoRedes.map((red, index) => {
    return (
      <div className={`intro--red ${props.modoOscuro?`${red.nombre.toLowerCase()}Oscuro`:`${red.nombre.toLowerCase()}`} `} key={index} onClick={()=>
        window.open(red.enlace,"_blank","noopener,noreferrer")}>
        <img
          alt={`Logo de ${red.nombre}`}
          key={index}
          className="intro--red-icono"
          src={red.icono}
        />
      </div>
    );
  });

  return (
    <div className="intro">
      <div className="intro--containerFoto">
        <div className="intro--imagen">
          <div className="intro--blob">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#43C494"
                d="M47.5,-38.7C62.7,-18.9,76.8,0.9,74.1,18.6C71.4,36.2,51.9,51.7,30.4,61.5C8.8,71.3,-14.7,75.4,-31.8,66.9C-49,58.3,-59.7,37.2,-65,14.6C-70.4,-8,-70.4,-32.1,-58.7,-51.1C-46.9,-70.1,-23.5,-83.9,-3.6,-81C16.2,-78.1,32.4,-58.4,47.5,-38.7Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <img src={foto} alt="Foto" className="intro--foto" />
        </div>
        <div className="intro--redes">{elementosRedes}</div>
      </div>

      <h1
        className={`intro--titulo ${
          props.modoOscuro ? "texto--modoOscuro" : ""
        }`}
      >
        ¡Hola mundo! 👋 Soy{" "}
        <span className="texto--color">Cristian Castillo</span> y este es mi
        portafolio.
      </h1>
    </div>
  );
}

export default Intro;
