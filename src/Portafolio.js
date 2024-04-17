import Header from "./components/Header";
import Intro from "./components/Intro";
import Biografia from "./components/Biografia";
import Proyectos from "./components/Proyectos";
import Lenguajes from "./components/Lenguajes";
import Idiomas from "./components/Idiomas";
import Pasatiempos from "./components/Pasatiempos";
import Footer from "./components/Footer";
import React from "react";

import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <Intro modoOscuro={modoOscuro} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <Biografia modoOscuro={modoOscuro} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <Proyectos modoOscuro={modoOscuro} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <Lenguajes modoOscuro={modoOscuro} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <Idiomas modoOscuro={modoOscuro} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <Pasatiempos modoOscuro={modoOscuro} />
        </motion.div>

        <Footer />
      </div>
    </main>
  );
}

export default Portafolio;
