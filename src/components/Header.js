import React from "react";
import { MagicTabSelect } from "react-magic-motion";

import { useTranslation } from "react-i18next";

import { useScroll, motion, useTransform } from "framer-motion";

import CambioIdioma from "./CambioIdioma";

export const Biografia = ({ fillColor }) => (
  <svg
    role="img"
    height="32px"
    width="32px"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C20.4816 3.82476 20.7706 4.69989 20.8985 6M21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3.51839 20.1752 3.22937 19.3001 3.10149 18"
      stroke={fillColor}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8 14H13"
      stroke={fillColor}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8 10H9M16 10H12"
      stroke={fillColor}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const Proyectos = ({ fillColor }) => (
  <svg
    role="img"
    height="32px"
    width="32px"
    aria-hidden="true"
    viewBox="0 0 512 512"
    fill={fillColor}
  >
    <path
      d="M192,7.10542736e-15 L384,110.851252 L384,332.553755 L192,443.405007 L1.42108547e-14,332.553755 L1.42108547e-14,110.851252 L192,7.10542736e-15 Z M42.666,157.654 L42.6666667,307.920144 L170.666,381.82 L170.666,231.555 L42.666,157.654 Z M341.333,157.655 L213.333,231.555 L213.333,381.82 L341.333333,307.920144 L341.333,157.655 Z M192,49.267223 L66.1333333,121.936377 L192,194.605531 L317.866667,121.936377 L192,49.267223 Z"
      strokeWidth="0.00512"
      strokeLinecap="round"
      fill={fillColor}
      transform="translate(64.000000, 34.346667)"
    />
  </svg>
);

export const Lenguajes = ({ fillColor }) => (
  <svg
    role="img"
    height="32px"
    width="32px"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M15.5 9L15.6716 9.17157C17.0049 10.5049 17.6716 11.1716 17.6716 12C17.6716 12.8284 17.0049 13.4951 15.6716 14.8284L15.5 15"
      stroke={fillColor}
      strokeWidth="1.5"
      strokeLinecap="round"
    />{" "}
    <path
      d="M13.2942 7.17041L12.0001 12L10.706 16.8297"
      stroke={fillColor}
      strokeWidth="1.5"
      strokeLinecap="round"
    />{" "}
    <path
      d="M8.49994 9L8.32837 9.17157C6.99504 10.5049 6.32837 11.1716 6.32837 12C6.32837 12.8284 6.99504 13.4951 8.32837 14.8284L8.49994 15"
      stroke={fillColor}
      strokeWidth="1.5"
      strokeLinecap="round"
    />{" "}
    <path
      d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
      stroke={fillColor}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const Idiomas = ({ fillColor }) => (
  <svg
    role="img"
    height="32px"
    width="32px"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M20.58 19.37L17.59 11.01C17.38 10.46 16.91 10.12 16.37 10.12C15.83 10.12 15.37 10.46 15.14 11.03L12.16 19.37C12.02 19.76 12.22 20.19 12.61 20.33C13 20.47 13.43 20.27 13.57 19.88L14.19 18.15H18.54L19.16 19.88C19.27 20.19 19.56 20.38 19.87 20.38C19.95 20.38 20.04 20.37 20.12 20.34C20.51 20.2 20.71 19.77 20.57 19.38L20.58 19.37ZM14.74 16.64L16.38 12.05L18.02 16.64H14.74ZM12.19 7.85C9.92999 11.42 7.89 13.58 5.41 15.02C5.29 15.09 5.16 15.12 5.04 15.12C4.78 15.12 4.53 14.99 4.39 14.75C4.18 14.39 4.3 13.93 4.66 13.73C6.75999 12.51 8.48 10.76 10.41 7.86H4.12C3.71 7.86 3.37 7.52 3.37 7.11C3.37 6.7 3.71 6.36 4.12 6.36H7.87V4.38C7.87 3.97 8.21 3.63 8.62 3.63C9.02999 3.63 9.37 3.97 9.37 4.38V6.36H13.12C13.53 6.36 13.87 6.7 13.87 7.11C13.87 7.52 13.53 7.86 13.12 7.86H12.18L12.19 7.85ZM12.23 15.12C12.1 15.12 11.97 15.09 11.85 15.02C11.2 14.64 10.57 14.22 9.97999 13.78C9.64999 13.53 9.58 13.06 9.83 12.73C10.08 12.4 10.55 12.33 10.88 12.58C11.42 12.99 12.01 13.37 12.61 13.72C12.97 13.93 13.09 14.39 12.88 14.75C12.74 14.99 12.49 15.12 12.23 15.12Z"
      fill={fillColor}
    />
  </svg>
);

export const Pasatiempos = ({ fillColor }) => (
  <svg
    role="img"
    height="32px"
    width="32px"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M7 12.5L8.5 9.5M8.5 9.5H16M8.5 9.5L10.5 16.5L16 9.5M8.5 9.5L7.5 7M16 9.5L17 12.5M16 9.5L15.5 8.5L18.5 8V9.5M9 15.5C9 17.433 7.433 19 5.5 19C3.567 19 2 17.433 2 15.5C2 13.567 3.567 12 5.5 12C7.433 12 9 13.567 9 15.5Z"
      stroke={fillColor}
      strokeWidth="1.2"
      strokeLinejoin="round"
    />{" "}
    <circle cx="18.5" cy="15.5" r="3.5" stroke={fillColor} strokeWidth="1.2" />{" "}
    <path d="M7 7H9.5" stroke={fillColor} strokeLinecap="round" />
  </svg>
);

function Header(props) {
  const { t } = useTranslation();
  const elementosNav = [
    { texto: t("header.Biografia"), seccion: "biografia" },
    { texto: t("header.Proyectos"), seccion: "proyectos" },
    { texto: t("header.Lenguajes"), seccion: "lenguajes" },
    { texto: t("header.Idiomas"), seccion: "idiomas" },
    { texto: t("header.Pasatiempos"), seccion: "pasatiempos" },
  ];

  const { scrollY } = useScroll();
  const windowHeight = window.innerHeight;

  const navbarOpacity = useTransform(
    scrollY,
    [windowHeight * 0.7, windowHeight * 0.85],
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
        <div className="nav--icono-container">
          {elemento.seccion === "biografia" ? (
            <Biografia fillColor={props.modoOscuro ? "white" : "#0e141b"} />
          ) : elemento.seccion === "proyectos" ? (
            <Proyectos fillColor={props.modoOscuro ? "white" : "#0e141b"} />
          ) : elemento.seccion === "lenguajes" ? (
            <Lenguajes fillColor={props.modoOscuro ? "white" : "#0e141b"} />
          ) : elemento.seccion === "idiomas" ? (
            <Idiomas fillColor={props.modoOscuro ? "white" : "#0e141b"} />
          ) : elemento.seccion === "pasatiempos" ? (
            <Pasatiempos fillColor={props.modoOscuro ? "white" : "#0e141b"} />
          ) : null}
        </div>
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
