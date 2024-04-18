import { useTranslation } from "react-i18next";

export const Nativo = ({ fillColor }) => (
  <svg
    role="img"
    height="64px"
    width="64px"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke={fillColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 20h.01" /> <path d="M7 20v-4" /> <path d="M12 20v-8" />{" "}
    <path d="M17 20V8" /> <path d="M22 4v16" />
  </svg>
);

export const Intermedio = ({ fillColor }) => (
  <svg
    role="img"
    height="64px"
    width="64px"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke={fillColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 20h.01" /> <path d="M7 20v-4" /> <path d="M12 20v-8" />
  </svg>
);

export const Basico = ({ fillColor }) => (
  <svg
    role="img"
    height="64px"
    width="64px"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke={fillColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 20h.01" /> <path d="M7 20v-4" />
  </svg>
);

function Idiomas(props) {
  const { t } = useTranslation();

  const objetoIdiomas = [
    {
      idioma: t("idiomas.Idiomas.ES"),
      nivel: t("idiomas.Niveles.Nativo"),
    },
    {
      idioma: t("idiomas.Idiomas.EN"),
      nivel: t("idiomas.Niveles.Intermedio"),
    },
    {
      idioma: t("idiomas.Idiomas.IT"),
      nivel: t("idiomas.Niveles.Basico"),
    },
  ];

  const elementosIdiomas = objetoIdiomas.map((idioma, index) => {
    return (
      <div className="idiomas--idioma-container" key={index}>
        <div className="idiomas--idioma-icono-container">
          {idioma.nivel === t("idiomas.Niveles.Nativo") ? (
            <Nativo fillColor={props.modoOscuro ? "white" : "#0e141b"} />
          ) : idioma.nivel === t("idiomas.Niveles.Intermedio") ? (
            <Intermedio fillColor={props.modoOscuro ? "white" : "#0e141b"} />
          ) : idioma.nivel === t("idiomas.Niveles.Basico") ? (
            <Basico fillColor={props.modoOscuro ? "white" : "#0e141b"} />
          ) : null}
        </div>
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
