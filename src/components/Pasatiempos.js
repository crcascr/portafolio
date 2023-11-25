import ciclismo from "../images/pasatiempos/ciclismo.svg";
import ciclismoBlanco from "../images/pasatiempos/ciclismoBlanco.svg";
import cocinar from "../images/pasatiempos/cocinar.svg";
import cocinarBlanco from "../images/pasatiempos/cocinarBlanco.svg";
import videojuegos from "../images/pasatiempos/videojuegos.svg";
import videojuegosBlanco from "../images/pasatiempos/videojuegosBlanco.svg";
import lectura from "../images/pasatiempos/lectura.svg";
import lecturaBlanco from "../images/pasatiempos/lecturaBlanco.svg";

function Pasatiempos(props) {
  const objetoPasatiempos = [
    {
      nombre: "Ciclismo de ruta",
      descripcion:
        "El ciclismo de ruta no solo es mi escape activo, sino también la fuente de inspiración para superar desafíos y explorar nuevos horizontes.",
      icono: `${props.modoOscuro ? ciclismoBlanco : ciclismo}`,
    },
    {
      nombre: "Cocinar",
      descripcion:
        "En mi cocina, la creatividad se mezcla con los sabores. Desde experimentar con nuevas recetas hasta recrear clásicos familiares, cada plato es una expresión de mi pasión por la diversidad gastronómica.",
      icono: `${props.modoOscuro ? cocinarBlanco : cocinar}`,
    },
    {
      nombre: "Videojuegos",
      descripcion:
        "Explorar mundos virtuales es mi forma de desconectar y sumergirme en narrativas fascinantes. Los videojuegos no solo son una fuente de entretenimiento, sino también una ventana a la innovación y al arte interactivo que me inspira en mi trabajo diario.",
      icono: `${props.modoOscuro ? videojuegosBlanco : videojuegos}`,
    },
    {
      nombre: "Lectura",
      descripcion:
        "Entre páginas se encuentra un universo de conocimiento y aventuras. La lectura es mi refugio intelectual, donde descubro nuevas perspectivas, desafío mi mente y me sumerjo en historias cautivadoras.",
      icono: `${props.modoOscuro ? lecturaBlanco : lectura}`,
    },
  ];

  const elementosPasatiempos = objetoPasatiempos.map((pasatiempo, index) => {
    return (
      <div className="pasatiempos--pasatiempo-container" key={index}>
        <div className="pasatiempos--pasatiempo-inicio">
          <img
            className="pasatiempos--pasatiempo-icono"
            alt={`Icono ${pasatiempo.nombre}`}
            key={index}
            src={pasatiempo.icono}
          />
          <h3
            className={`pasatiempos--pasatiempo-titulo ${
              props.modoOscuro ? "texto--modoOscuro" : ""
            }`}
          >
            {pasatiempo.nombre}
          </h3>
        </div>
        <p
          className={`pasatiempos--pasatiempo-descripcion ${
            props.modoOscuro ? "texto--modoOscuro" : ""
          }`}
        >
          {pasatiempo.descripcion}
        </p>
      </div>
    );
  });

  return (
    <section id="pasatiempos" className="pasatiempos">
      <h2 className="pasatiempos-titulo">
        <span className="texto--color">
          Pasatiempos: Explorando Mi Lado Personal
        </span>
      </h2>
      <p
        className={`pasatiempos--introduccion ${
          props.modoOscuro ? "texto--modoOscuro" : ""
        }`}
      >
        Más allá del código y las líneas de diseño, mi vida se teje con una
        paleta de pasatiempos que reflejan mi personalidad y creatividad. Desde
        explorar nuevos rincones en mi bicicleta hasta sumergirme en los sabores
        con la cocina, estos pasatiempos no solo enriquecen mi vida, sino que
        también aportan una perspectiva única a mi enfoque creativo.
      </p>
      <div className="pasatiempos--container">{elementosPasatiempos}</div>
    </section>
  );
}

export default Pasatiempos;
