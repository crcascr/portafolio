import { useTranslation } from "react-i18next";

function Biografia(props) {
  const { t } = useTranslation();
  return (
    <section id="biografia" className="biografia">
      <h2 className="biografia--titulo">
        <span className="texto--color">{t("biografia.Titulo")}</span>
      </h2>
      <div
        className={`biografia--descripcion ${
          props.modoOscuro ? "texto--modoOscuro" : ""
        }`}
      >
        <p
          className={`biografia--texto ${
            props.modoOscuro ? "texto--modoOscuro" : ""
          }`}
        >
          {t("biografia.Parrafo_1")}
        </p>
        <p
          className={`biografia--texto ${
            props.modoOscuro ? "texto--modoOscuro" : ""
          }`}
        >
          {t("biografia.Parrafo_2")}
        </p>
        <p
          className={`biografia--texto ${
            props.modoOscuro ? "texto--modoOscuro" : ""
          }`}
        >
          {t("biografia.Parrafo_3")}
        </p>
        <p
          className={`biografia--texto ${
            props.modoOscuro ? "texto--modoOscuro" : ""
          }`}
        >
          {t("biografia.Parrafo_4")}
        </p>
      </div>
    </section>
  );
}

export default Biografia;
