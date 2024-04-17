import React from "react";
import { MagicTabSelect } from "react-magic-motion";

import { useTranslation } from "react-i18next";

import { useScroll, motion, useTransform } from "framer-motion";

import biografia from "../images/biografia.svg";
import proyectos from "../images/proyectos.svg";
import lenguajes from "../images/lenguajes.svg";
import idiomas from "../images/idiomas.svg";
import pasatiempos from "../images/pasatiempos.svg";

import CambioIdioma from "./CambioIdioma";

function Header(props) {
  const { t } = useTranslation();
  const elementosNav = [
    { texto: t("header.Biografia"), icono: biografia, seccion: "biografia" },
    { texto: t("header.Proyectos"), icono: proyectos, seccion: "proyectos" },
    { texto: t("header.Lenguajes"), icono: lenguajes, seccion: "lenguajes" },
    { texto: t("header.Idiomas"), icono: idiomas, seccion: "idiomas" },
    {
      texto: t("header.Pasatiempos"),
      icono: pasatiempos,
      seccion: "pasatiempos",
    },
  ];

  const { scrollY } = useScroll();
  const windowHeight = window.innerHeight;

  const navbarOpacity = useTransform(
    scrollY,
    [windowHeight * 0.8, windowHeight * 1.05],
    [0, 1]
  );

  const [indiceHov, setindiceHov] = React.useState(null);

  const componentesNav = elementosNav.map((elemento, index) => {
    return (
      <a
        key={elemento.texto}
        href={`#${elemento.seccion}`}
        onMouseEnter={() => setindiceHov(index)}
        className="nav--link"
        style={{ color: props.modoOscuro ? "white" : "#0e141b" }}
      >
        {indiceHov === index && (
          <MagicTabSelect
            id="pillTabs"
            transition={{ type: "spring", bounce: 0.3 }}
          >
            <span
              className="nav--span"
              style={{ boxShadow: "0 0 20px #20a97b" }}
            ></span>
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
    <motion.nav
      style={{ opacity: navbarOpacity }}
      transition={{ duration: 0.5 }}
    >
      <nav className="navPortafolio">
        <div className="nav--links">
          <button
            className={`esquemaColor ${
              props.modoOscuro ? "esquemaColor--oscuro" : ""
            }`}
            onClick={props.cambiarModo}
          >
            {props.modoOscuro
              ? t("header.Modo_claro")
              : t("header.Modo_oscuro")}
          </button>
          <CambioIdioma darkMode={props.modoOscuro} />
          {componentesNav}
        </div>
      </nav>
    </motion.nav>
  );
}

export default Header;
