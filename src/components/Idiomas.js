import nativo from "../images/idiomas/nativo.svg";
import nativoBlanco from "../images/idiomas/nativo-blanco.svg";
import intermedio from "../images/idiomas/intermedio.svg";
import intermedioBlanco from "../images/idiomas/intermedio-blanco.svg";
import basico from "../images/idiomas/basico.svg";
import basicoBlanco from "../images/idiomas/basico-blanco.svg";

import { useTranslation } from "react-i18next";

function Idiomas(props) {
  const { t } = useTranslation();

  const objetoIdiomas = [
    {
      idioma: t("idiomas.Idiomas.ES"),
      nivel: t("idiomas.Niveles.Nativo"),
      icono: `${props.modoOscuro ? nativoBlanco : nativo}`,
    },
    {
      idioma: t("idiomas.Idiomas.EN"),
      nivel: t("idiomas.Niveles.Intermedio"),
      icono: `${props.modoOscuro ? intermedioBlanco : intermedio}`,
    },
    {
      idioma: t("idiomas.Idiomas.IT"),
      nivel: t("idiomas.Niveles.Basico"),
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
        <span className="texto--color">{t("idiomas.Titulo")}</span>
      </h2>
      <p
        className={`idiomas--introduccion ${
          props.modoOscuro ? "texto--modoOscuro" : ""
        }`}
      >
        {t("idiomas.Introduccion")}
      </p>
      <div className="idiomas--container">{elementosIdiomas}</div>
    </section>
  );
}

export default Idiomas;
