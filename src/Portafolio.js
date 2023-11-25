import Header from "./components/Header";
import Intro from "./components/Intro";
import Biografia from "./components/Biografia";
import Proyectos from "./components/Proyectos";
import Lenguajes from "./components/Lenguajes";
import Idiomas from "./components/Idiomas";
import Pasatiempos from "./components/Pasatiempos";
import Footer from "./components/Footer";
import React from "react";

function Portafolio() {
  const [modoOscuro, setModoOscuro] = React.useState(false);

  React.useEffect(() => {
    const dateEl = new Date();
    const hora = dateEl.getHours();
    const minuto = dateEl.getMinutes();
    if (hora === 17) {
      if (minuto > 45) {
        setModoOscuro(true);
      }
    } else if (hora >= 18) {
      setModoOscuro(true);
    } else {
      setModoOscuro(false);
    }
  }, []);

  function cambiarModo() {
    setModoOscuro((prevModo) => !prevModo);
  }

  return (
    <main className={`paginaContainer ${modoOscuro ? "modoOscuro" : ""}`}>
      <div className="paginaContainer--svg-background">
        <div className="paginaContainer--gradiente"></div>
      </div>
      <div className="paginaContainer--contenido">
        <Header cambiarModo={cambiarModo} modoOscuro={modoOscuro} />
        <Intro modoOscuro={modoOscuro} />
        <Biografia modoOscuro={modoOscuro} />
        <Proyectos modoOscuro={modoOscuro} />
        <Lenguajes modoOscuro={modoOscuro} />
        <Idiomas modoOscuro={modoOscuro} />
        <Pasatiempos modoOscuro={modoOscuro} />
        <Footer />
      </div>
    </main>
  );
}

export default Portafolio;
