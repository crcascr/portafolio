import ciclismo from "../images/pasatiempos/ciclismo.svg";
import ciclismoBlanco from "../images/pasatiempos/ciclismoBlanco.svg";
import cocinar from "../images/pasatiempos/cocinar.svg";
import cocinarBlanco from "../images/pasatiempos/cocinarBlanco.svg";
import videojuegos from "../images/pasatiempos/videojuegos.svg";
import videojuegosBlanco from "../images/pasatiempos/videojuegosBlanco.svg";
import lectura from "../images/pasatiempos/lectura.svg";
import lecturaBlanco from "../images/pasatiempos/lecturaBlanco.svg";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Pasatiempos(props) {
  const { t } = useTranslation();

  const objetoPasatiempos = [
    {
      nombre: t("pasatiempos.Pasatiempos.Ciclismo_de_ruta.nombre"),
      descripcion: t("pasatiempos.Pasatiempos.Ciclismo_de_ruta.descripcion"),
      icono: `${props.modoOscuro ? ciclismoBlanco : ciclismo}`,
    },
    {
      nombre: t("pasatiempos.Pasatiempos.Cocinar.nombre"),
      descripcion: t("pasatiempos.Pasatiempos.Cocinar.descripcion"),
      icono: `${props.modoOscuro ? cocinarBlanco : cocinar}`,
    },
    {
      nombre: t("pasatiempos.Pasatiempos.Videojuegos.nombre"),
      descripcion: t("pasatiempos.Pasatiempos.Videojuegos.descripcion"),
      icono: `${props.modoOscuro ? videojuegosBlanco : videojuegos}`,
    },
    {
      nombre: t("pasatiempos.Pasatiempos.Lectura.nombre"),
      descripcion: t("pasatiempos.Pasatiempos.Lectura.descripcion"),
      icono: `${props.modoOscuro ? lecturaBlanco : lectura}`,
    },
  ];

  const elementosPasatiempos = objetoPasatiempos.map((pasatiempo, index) => {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, y: 50 }}
      >
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
      </motion.div>
    );
  });

  return (
    <section id="pasatiempos" className="pasatiempos">
      <h2 className="pasatiempos-titulo">
        <span className="texto--color">{t("pasatiempos.Titulo")}</span>
      </h2>
      <p
        className={`pasatiempos--introduccion ${
          props.modoOscuro ? "texto--modoOscuro" : ""
        }`}
      >
        {t("pasatiempos.Introduccion")}
      </p>
      <div className="pasatiempos--container">{elementosPasatiempos}</div>
    </section>
  );
}

export default Pasatiempos;
