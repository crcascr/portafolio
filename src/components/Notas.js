import notas1 from "../images/proyectos/notas/notas1.webp";
import notas2 from "../images/proyectos/notas/notas2.webp";
import notas3 from "../images/proyectos/notas/notas3.webp";
import notas4 from "../images/proyectos/notas/notas4.webp";

function Notas() {
  const arregloNotas = [
    { src: notas1 },
    { src: notas2 },
    { src: notas3 },
    { src: notas4 },
  ];

  const elementosNotas = arregloNotas.map((nota, index) => {
    return (
      <img
        key={index}
        alt="Imagen página notas"
        src={nota.src}
        className="proyecto--imagen"
      />
    );
  });
  return <div className="proyecto--imagenes">{elementosNotas}</div>;
}

export default Notas;
