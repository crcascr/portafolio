import php from "../images/lenguajes/php.svg";
import mysql from "../images/lenguajes/mysql.svg";
import javascript from "../images/lenguajes/javascript-svgrepo.svg";
import css from "../images/lenguajes/css.svg";
import react from "../images/lenguajes/react.svg";
import React from "react";

function Lenguajes(props) {
  const elementosLenguajes = [
    { texto: "PHP", logo: php, color: "#8a9fe066" },
    { texto: "JavaScript", logo: javascript, color: "#f7df1e80" },
    { texto: "MySQL", logo: mysql, color: "#00758f66" },
    { texto: "CSS", logo: css, color: "#33a9dc66" },
    { texto: "React", logo: react, color: "#00d8ff66" },
  ];

  const [lenguajeHov, setLenguajeHov] = React.useState(null);

  const componentesLenguajes = elementosLenguajes.map((elemento, index) => {
    return (
      <div
        className="lenguajes--lenguaje"
        key={elemento.texto}
        onMouseEnter={() => setLenguajeHov(index)}
        onMouseLeave={() => setLenguajeHov(null)}
        style={{
          backgroundColor: lenguajeHov === index ? elemento.color : "",
          boxShadow: lenguajeHov === index ? `0 0 20px ${elemento.color}` : "",
        }}
      >
        <img
          src={elemento.logo}
          className="lenguajes--logo"
          alt={`Icono ${elemento.texto}`}
        />
        <p
          className={`lenguajes--nombre ${
            props.modoOscuro ? "texto--modoOscuro" : ""
          }`}
        >
          {elemento.texto}
        </p>
      </div>
    );
  });

  return (
    <section id="lenguajes" className="lenguajes">
      <h2 className="lenguajes-titulo">
        <span className="texto--color">
          Lenguajes: Entre la Creatividad y la Funcionalidad
        </span>
      </h2>
      <p
        className={`lenguajes--introduccion ${
          props.modoOscuro ? "texto--modoOscuro" : ""
        }`}
      >
        ¡Explora mi mundo de lenguajes de programación! 💻✨ Desde PHP hasta
        React, cada línea de código cuenta una historia única. ¡Descubre la
        magia donde la creatividad se encuentra con la funcionalidad!
      </p>
      <div className="lenguajes--container">{componentesLenguajes}</div>
    </section>
  );
}

export default Lenguajes;
