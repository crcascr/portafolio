import React, { useState } from "react";
import i18n from "../i18n";
import "./CambioIdioma.css";

function CambioIdioma(darkMode) {
  const [idiomaActual, setIdiomaActual] = useState(i18n.language);
  const cambiarIdioma = (idioma) => {
    i18n.changeLanguage(idioma);
    setIdiomaActual(idioma);
  };

  return (
    <div>
      <div className="switch">
        <input
          id="switch__Idioma"
          className={`check-toggle ${
            darkMode.darkMode
              ? "check-toggle-round-flat-dark"
              : "check-toggle-round-flat"
          }`}
          type="checkbox"
          onClick={() =>
            idiomaActual === "es" ? cambiarIdioma("en") : cambiarIdioma("es")
          }
        />
        <label htmlFor="switch__Idioma"></label>
        <span
          className={`switch__On ${
            darkMode.darkMode ? (idiomaActual !== "en" ? "" : "darkSwitch") : ""
          }`}
        >
          ES
        </span>
        <span
          className={`switch__Off ${
            darkMode.darkMode ? (idiomaActual !== "es" ? "" : "darkSwitch") : ""
          }`}
        >
          EN
        </span>
      </div>
    </div>
  );
}

export default CambioIdioma;
