import nativo from "../images/idiomas/nativo.svg";
import nativoBlanco from "../images/idiomas/nativo-blanco.svg";
import intermedio from "../images/idiomas/intermedio.svg";
import intermedioBlanco from "../images/idiomas/intermedio-blanco.svg";
import basico from "../images/idiomas/basico.svg";
import basicoBlanco from "../images/idiomas/basico-blanco.svg";

function Idiomas(props) {
  const objetoIdiomas = [
    {
      idioma: "Español",
      nivel: "Nativo",
      icono: `${props.modoOscuro ? nativoBlanco : nativo}`,
    },
    {
      idioma: "Inglés",
      nivel: "Intermedio",
      icono: `${props.modoOscuro ? intermedioBlanco : intermedio}`,
    },
    {
      idioma: "Italiano",
      nivel: "Básico",
      icono: `${props.modoOscuro ? basicoBlanco : basico}`,
    },
  ];

  const elementosIdiomas = objetoIdiomas.map((idioma, index) => {
    return (
      <div className="idiomas--idioma-container" key={index}>        
        <img
          className="idiomas--idioma-icono"
          alt={`Icono nivel ${idioma.nivel} del idioma ${idioma.idioma}`}
          key={index}
          src={idioma.icono}
        />
        <h3
          className={`idiomas--idioma-texto ${
            props.modoOscuro ? "texto--modoOscuro" : ""
          }`}
        >
          {idioma.idioma}: {idioma.nivel}
        </h3>
      </div>
    );
  });

  return (
    <section id="idiomas" className="idiomas">
      <h2 className="idiomas--titulo">
        <span className="texto--color">Idiomas: Explora Mi Multilingüismo</span>
      </h2>
      <p
        className={`idiomas--introduccion ${
          props.modoOscuro ? "texto--modoOscuro" : ""
        }`}
      >
        Desde el español hasta el inglés y más allá, estos idiomas no solo son
        herramientas de expresión, sino puentes hacia conexiones globales y
        oportunidades diversas. Acompáñame en este recorrido donde la riqueza de
        las palabras se convierte en un activo en un mundo cada vez más
        conectado.
      </p>
      <div className="idiomas--container">{elementosIdiomas}</div>
    </section>
  );
}

export default Idiomas;
