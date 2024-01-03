import React from "react";
import link from "../images/link.svg";
import linkBlanco from "../images/link-blanco.svg";

function Proyectos(props) {
  const elementosProyectos = [
    {
      carpeta: "vassarelly",
      titulo: "Vassarelly",
      link: "https://vassarelly.com/",
      imagenes: [
        {
          nombre: "vassarelly1",
          src: require("../images/proyectos/vassarelly/vassarelly1.webp"),
        },
        {
          nombre: "vassarelly2",
          src: require("../images/proyectos/vassarelly/vassarelly2.webp"),
        },
        {
          nombre: "vassarelly3",
          src: require("../images/proyectos/vassarelly/vassarelly3.webp"),
        },
        {
          nombre: "vassarelly4",
          src: require("../images/proyectos/vassarelly/vassarelly4.webp"),
        },
      ],
      color: "#dcbbe966",
      hoverColor: "#dcbbe9",
      descripcion:
        "Un sitio web elegante y funcional con un sólido backend desarrollado en PHP y MySQL que facilita la gestión de servicios, citas, clientes, administradores, ubicaciones y profesionales. Su interfaz dinámica y responsive, construida con JavaScript y CSS, ofrece características como un mapa interactivo, formulario de contacto, sistema de reservas en línea y un práctico panel de administración. Alojado en un servidor seguro y optimizado para motores de búsqueda, es la plataforma perfecta para servicios de belleza y relajación.",
    },
    {
      carpeta: "booking",
      titulo: "Booking App",
      link: "https://github.com/crcascr/hotel-booking-app",
      imagenes: [
        {
          nombre: "booking1",
          src: require("../images/proyectos/booking/booking1.webp"),
        },
        {
          nombre: "booking2",
          src: require("../images/proyectos/booking/booking2.webp"),
        },
        {
          nombre: "booking3",
          src: require("../images/proyectos/booking/booking3.webp"),
        },
        {
          nombre: "booking4",
          src: require("../images/proyectos/booking/booking4.webp"),
        },
        {
          nombre: "booking5",
          src: require("../images/proyectos/booking/booking5.webp"),
        },
      ],
      color: "#acc7c766",
      hoverColor: "#acc7c7",
      descripcion:
        "Una aplicación móvil funcional desarrollada con React, Bootstrap y CSS que facilita la reserva de habitaciones de hotel. Cuenta con una interfaz ágil y elegante optimizada para iOS y Android que muestra información clave de los hoteles y permite filtrar, buscar y ordenar de forma sencilla. La aplicación utiliza un modal elegante para mostrar más información de cada hotel. Construida con metodologías ágiles y tecnologías web progresivas.",
      extraLinks: [
        {
          nombre: "Android",
          link: "https://appetize.io/app/6e7detlk4btpdo2erfgfbwgibu?device=pixel7&osVersion=13.0",
        },
        {
          nombre: "iOS",
          link: "https://appetize.io/app/qhz6wvnql3gaqxsgcnocfc2wsu?device=iphone15promax&osVersion=17.0",
        },
      ],
    },
    {
      carpeta: "sumz",
      titulo: "Sumz",
      link: "https://extraordinary-sundae-3af29b.netlify.app/",
      imagenes: [
        {
          nombre: "sumz1",
          src: require("../images/proyectos/sumz/sumz1.webp"),
        },
        {
          nombre: "sumz2",
          src: require("../images/proyectos/sumz/sumz2.webp"),
        },
        {
          nombre: "sumz3",
          src: require("../images/proyectos/sumz/sumz3.webp"),
        },
        {
          nombre: "sumz4",
          src: require("../images/proyectos/sumz/sumz4.webp"),
        },
      ],
      color: "#f59e0b66",
      hoverColor: "#f59e0b",
      descripcion:
        "Una práctica herramienta que te permite obtener resúmenes en español de tus artículos favoritos en línea, con solo unos pocos clics. Utiliza la potente API de RapidAPI Article Extractor and Summarizer para ofrecer un servicio de resumen de alta calidad.",
    },
    {
      carpeta: "notas",
      titulo: "Notas",
      link: "https://incredible-syrniki-842a1c.netlify.app/",
      imagenes: [
        {
          nombre: "notas1",
          src: require("../images/proyectos/notas/notas1.webp"),
        },
        {
          nombre: "notas2",
          src: require("../images/proyectos/notas/notas2.webp"),
        },
        {
          nombre: "notas3",
          src: require("../images/proyectos/notas/notas3.webp"),
        },
        {
          nombre: "notas4",
          src: require("../images/proyectos/notas/notas4.webp"),
        },
      ],
      color: "#4a4e7466",
      hoverColor: "#4a4e74",
      descripcion:
        "Una aplicación web que permite almacenar y organizar notas en una base de datos de Google Firebase. Las notas se ordenan automáticamente según la fecha de modificación.",
    },
    {
      carpeta: "tenzies",
      titulo: "Tenzies",
      link: "https://clever-chimera-f1596f.netlify.app/",
      imagenes: [
        {
          nombre: "tenzies1",
          src: require("../images/proyectos/tenzies/tenzies1.webp"),
        },
        {
          nombre: "tenzies2",
          src: require("../images/proyectos/tenzies/tenzies2.webp"),
        },
        {
          nombre: "tenzies3",
          src: require("../images/proyectos/tenzies/tenzies3.webp"),
        },
        {
          nombre: "tenzies4",
          src: require("../images/proyectos/tenzies/tenzies4.webp"),
        },
      ],
      color: "#5035ff66",
      hoverColor: "#5035ff",
      descripcion:
        "Un emocionante juego en el que el objetivo es igualar las caras de los 10 dados en el menor tiempo posible. El juego registra el tiempo de juego, el número de movimientos y el mejor tiempo, este último en el almacenamiento local. Si logras una nueva marca, se actualizará automáticamente.",
    },
    {
      carpeta: "quizzical",
      titulo: "Quizzical",
      link: "https://jocular-faun-447039.netlify.app/",
      imagenes: [
        {
          nombre: "quizzical1",
          src: require("../images/proyectos/quizzical/quizzical1.webp"),
        },
        {
          nombre: "quizzical2",
          src: require("../images/proyectos/quizzical/quizzical2.webp"),
        },
        {
          nombre: "quizzical3",
          src: require("../images/proyectos/quizzical/quizzical3.webp"),
        },
        {
          nombre: "quizzical4",
          src: require("../images/proyectos/quizzical/quizzical4.webp"),
        },
      ],
      color: "#4d5b9e66",
      hoverColor: "#4d5b9e",
      descripcion:
        "Un emocionante juego de preguntas que pondrá a prueba tus conocimientos y tu agudeza mental. Quizzical obtiene preguntas de diversas categorías y niveles de dificultad a través de la API de Open Trivia Database. Estas preguntas, junto con sus opciones de respuesta, se presentan de manera aleatoria en un desafío interactivo.",
    },
  ];

  const [proyectoHov, setProyectoHov] = React.useState(null);
  const [tarjetaProyectoHov, setTarjetaProyectoHov] = React.useState(null);

  const componentesProyectos = elementosProyectos.map((elemento, index) => {
    return (
      <div className={`proyecto--${elemento.carpeta}`} key={elemento.carpeta}>
        <h3 className={`${props.modoOscuro ? "texto--modoOscuro" : ""}`}>
          {elemento.titulo}
        </h3>
        <div
          className="proyecto--container"
          style={{
            backgroundColor: elemento.color,
            boxShadow:
              tarjetaProyectoHov === index
                ? `0 0 40px 10px ${elemento.hoverColor}`
                : "",
          }}
          onMouseEnter={() => setTarjetaProyectoHov(index)}
          onMouseLeave={() => setTarjetaProyectoHov(null)}
        >
          <div className="proyecto--descripcion">
            <p
              className={`proyecto--descripcion-texto ${
                props.modoOscuro ? "texto--modoOscuro" : ""
              }`}
            >
              {elemento.descripcion}
            </p>
            <a
              className={`proyecto--link ${
                props.modoOscuro ? "texto--modoOscuro" : ""
              }`}
              href={elemento.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Icono enlace"
                className="proyecto--link-icono"
                src={props.modoOscuro ? linkBlanco : link}
              />
              Ver proyecto
            </a>
            {elemento.extraLinks && (
              <>
                {elemento.extraLinks.map((linkExtra, indexLink) => (
                  <a
                    key={indexLink}
                    className={`proyecto--link ${
                      props.modoOscuro ? "texto--modoOscuro" : ""
                    }`}
                    href={linkExtra.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Icono enlace"
                      className="proyecto--link-icono"
                      src={props.modoOscuro ? linkBlanco : link}
                    />
                    {`Ver proyecto en ${linkExtra.nombre}`}
                  </a>
                ))}
              </>
            )}
          </div>
          <div className={`proyecto--imagenes`}>
            {elemento.imagenes.map((imagen) => (
              <img
                onMouseEnter={() => setProyectoHov(index)}
                onMouseLeave={() => setProyectoHov(null)}
                onClick={() =>
                  window.open(imagen.src, "_blank", "noopener,noreferrer")
                }
                key={imagen.nombre}
                src={imagen.src}
                alt={`Imagen del proyecto ${elemento.carpeta}`}
                style={{
                  transform:
                    proyectoHov === index
                      ? `translateX(-${elemento.imagenes.length * 70.5}%)`
                      : "",
                }}
                className={`proyecto--imagen ${
                  proyectoHov === index ? "proyecto--hover" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  });
  return (
    <section id="proyectos" className="proyectos">
      <h2 className="proyectos--titulo">
        <span className="texto--color">
          Proyectos: Código que Cuenta Historias
        </span>
      </h2>
      <p
        className={`proyectos--introduccion ${
          props.modoOscuro ? "texto--modoOscuro" : ""
        }`}
      >
        ¡Bienvenido a mi galería de proyectos! 💻🚀 Cada línea de código cuenta
        una historia de desafíos superados y soluciones creativas.
      </p>
      <div className="proyectos--container">{componentesProyectos}</div>
    </section>
  );
}

export default Proyectos;
