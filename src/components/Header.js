import React from "react";
import { MagicTabSelect } from "react-magic-motion";
import biografia from "../images/biografia.svg";
import proyectos from "../images/proyectos.svg";
import lenguajes from "../images/lenguajes.svg";
import idiomas from "../images/idiomas.svg";
import pasatiempos from "../images/pasatiempos.svg";

function Header(props) {
  const elementosNav = [
    { texto: "Biografía", icono: biografia, seccion: "biografia"},
    { texto: "Proyectos", icono: proyectos, seccion: "proyectos" },
    { texto: "Lenguajes", icono: lenguajes, seccion: "lenguajes" },
    { texto: "Idiomas", icono: idiomas, seccion: "idiomas" },
    { texto: "Pasatiempos", icono: pasatiempos, seccion: "pasatiempos" },
  ];

  const [indiceHov, setindiceHov] = React.useState(null);

  const componentesNav = elementosNav.map((elemento, index) => {
    return (
      <a
        key={elemento.texto}
        href={`#${elemento.seccion}`}
        onMouseEnter={() => setindiceHov(index)}
        className="nav--link"
        style={{color:props.modoOscuro?"white":"#0e141b"}}
      >
        {indiceHov === index && (
          <MagicTabSelect
            id="pillTabs"
            transition={{ type: "spring", bounce: 0.3 }}
          >
            <span className="nav--span" style={{boxShadow:"0 0 20px #20a97b"}}></span>
          </MagicTabSelect>
        )}
        <img
          src={elemento.icono}
          className="nav--icono"
          alt={`Icono ${elemento.texto}`}
        />
        {elemento.texto}
      </a>
    );
  });

  return (
    <nav className="navPortafolio">
      <div className="nav--links">
        <button
          className={`esquemaColor ${
            props.modoOscuro ? "esquemaColor--oscuro" : ""
          }`}
          onClick={props.cambiarModo}
        >
          {props.modoOscuro ? "Modo claro" : "Modo oscuro"}
        </button>
        {componentesNav}
      </div>
    </nav>
  );
}

export default Header;
