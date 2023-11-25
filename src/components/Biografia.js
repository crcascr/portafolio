function Biografia(props) {
  return (
    <section id="biografia" className="biografia">
      <h2 className="biografia--titulo"><span className="texto--color">Biografia: De Circuitos a Código</span></h2>
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
          Soy un ingeniero eléctrico que baila entre cables, circuitos y líneas
          de código. Mi superpoder radica en dominar los lenguajes de la web:
          PHP, JavaScript y MySQL. ¡Son como mi triángulo amoroso de la
          programación! Pero eso no es todo, también manejo CSS y React,
          agregando estilo y dinamismo a cada línea de código.          
          
        </p>
        <p
          className={`biografia--texto ${
            props.modoOscuro ? "texto--modoOscuro" : ""
          }`}
        >
          Con este arsenal de herramientas, creo aplicaciones web que no solo
          funcionan, ¡sino que también tienen estilo! Diseño experiencias que no
          solo resuelven problemas, ¡sino que también cautivan miradas!
          Además, me aventuro en el mundo del control de versiones con Git,
          manteniendo el código en forma y siempre listo para la siguiente
          actualización. Y cuando se trata de analizar datos, Python es mi
          compañero de confianza.
        </p>
        <p
          className={`biografia--texto ${
            props.modoOscuro ? "texto--modoOscuro" : ""
          }`}
        >
          Ah, y no puedo olvidar mencionar mi hazaña de recibir una patente. Mi
          trabajo de grado dio como fruto una herramienta increíble para el
          dimensionamiento de sistemas de baterías. ¡Una pequeña contribución
          para un mundo más energizado!
        </p>
        <p
          className={`biografia--texto ${
            props.modoOscuro ? "texto--modoOscuro" : ""
          }`}
        >
          Soy un profesional motivado con una buena dosis de habilidades de
          liderazgo y trabajo en equipo. Siempre listo para enfrentar nuevos
          desafíos y llevar las ideas al siguiente nivel. ¡Vamos más allá de los
          circuitos y creemos algo extraordinario juntos!
        </p>
      </div>
    </section>
  );
}

export default Biografia;
