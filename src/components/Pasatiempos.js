import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const Ciclismo = ({ fillColor }) => (
  <svg
    role="img"
    height="64px"
    width="64px"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke={fillColor}
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="14" cy="6" r="1" />
    <path d="M12 18V14L9 12L12 9L14 11L16 12" /> <circle cx="6" cy="17" r="3" />
    <circle cx="18" cy="17" r="3" />
  </svg>
);

export const Cocinar = ({ fillColor }) => (
  <svg
    role="img"
    height="64px"
    width="64px"
    aria-hidden="true"
    viewBox="0 0 32 32"
    fill="none"
    stroke={fillColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit={10}
  >
    <path d="M22.4,8.1C22.7,8,23.1,8,23.5,8c3,0,5.5,2.5,5.5,5.5S26.5,19,23.5,19l0.5,9H8l0.5-9c-3,0-5.5-2.5-5.5-5.5 S5.5,8,8.5,8c0.4,0,0.8,0,1.1,0.1" />
    <path d="M23,11c0-3.9-3.1-7-7-7s-7,3.1-7,7" />
    <line x1="16" y1="21" x2="16" y2="24" />
    <line x1="12.5" y1="21" x2="12" y2="23.7" />
    <line x1="19.5" y1="21" x2="20" y2="23.7" />
  </svg>
);

export const Videojuegos = ({ fillColor }) => (
  <svg
    role="img"
    height="64px"
    width="64px"
    aria-hidden="true"
    viewBox="0 0 512 512"
    fill={fillColor}
  >
    <path d="M511.27,331.566L511.27,331.566c0-0.009,0-0.018,0-0.026c-0.008-0.052,0-0.087-0.008-0.14h-0.009 c-6.682-88.65-27.159-154.403-55.948-198.846c-14.412-22.221-30.968-39.115-49.041-50.507 c-18.048-11.401-37.649-17.198-57.388-17.18c-14.551-0.009-26.985,2.629-37.527,6.611c-15.836,5.97-27.358,14.795-36.364,21.319 c-4.495,3.28-8.373,5.961-11.549,7.592c-3.211,1.658-5.475,2.239-7.436,2.239c-1.328-0.009-2.725-0.251-4.521-0.92 c-3.115-1.137-7.288-3.732-12.278-7.332c-7.531-5.354-16.885-12.764-29.223-18.846c-12.339-6.092-27.766-10.69-46.855-10.664 c-19.739-0.018-39.34,5.787-57.388,17.18c-27.115,17.119-50.794,46.481-69.008,87.887C18.542,211.332,5.743,264.92,0.746,331.401 H0.738c-0.009,0.052,0,0.096-0.009,0.14c0,0.008,0,0.017,0,0.026l0,0C0.243,336.981,0,342.247,0,347.358 c-0.009,25.058,5.77,46.455,16.651,63.141c10.846,16.694,26.863,28.347,45.614,33.822c6.43,1.892,13.068,2.811,19.757,2.811 c19.445-0.026,39.046-7.618,57.692-20.764c18.681-13.189,36.598-32.052,52.91-55.731c7.845-11.427,18.5-24.798,29.987-34.854 c5.736-5.032,11.662-9.214,17.362-12.026c5.71-2.82,11.09-4.244,16.027-4.235c4.936-0.009,10.317,1.414,16.026,4.235 c8.555,4.199,17.588,11.558,25.787,20.112c8.226,8.538,15.67,18.196,21.562,26.76c16.312,23.688,34.23,42.55,52.902,55.739 c18.655,13.146,38.255,20.738,57.7,20.764c6.69,0,13.328-0.92,19.749-2.811c18.759-5.475,34.776-17.128,45.614-33.822 C506.221,393.813,512,372.416,512,347.358C512,342.256,511.757,336.981,511.27,331.566z M476.737,398.36 c-8.104,12.356-19.236,20.469-33.284,24.651c-4.33,1.275-8.807,1.9-13.475,1.908c-13.484,0.026-28.902-5.414-44.894-16.703 c-15.974-11.254-32.312-28.225-47.418-50.177c-8.564-12.417-20.044-27.012-33.64-38.95c-6.812-5.97-14.169-11.297-22.16-15.245 c-7.975-3.94-16.677-6.534-25.866-6.534c-9.189,0-17.892,2.594-25.866,6.534c-11.974,5.943-22.577,14.906-31.957,24.616 c-9.353,9.726-17.432,20.268-23.843,29.579c-15.106,21.952-31.454,38.923-47.419,50.177 c-15.991,11.288-31.418,16.729-44.894,16.703c-4.677-0.009-9.145-0.633-13.484-1.908c-14.04-4.182-25.172-12.295-33.284-24.651 c-8.06-12.364-13.04-29.293-13.04-51.002c0-4.451,0.208-9.111,0.65-13.961v-0.052l0.009-0.113 c6.429-86.17,26.446-148.582,52.451-188.59c12.989-20.026,27.41-34.447,42.256-43.801c14.872-9.353,30.126-13.744,45.544-13.761 c11.896,0.009,21.424,2.091,29.675,5.189c12.356,4.65,21.883,11.756,31.158,18.507c4.652,3.367,9.233,6.655,14.378,9.336 c5.111,2.655,11.028,4.729,17.666,4.729c4.399,0,8.556-0.928,12.286-2.325c6.56-2.482,12-6.213,17.422-10.065 c8.113-5.831,16.208-12.14,26.091-16.981c9.883-4.833,21.449-8.364,37.076-8.39c15.418,0.017,30.672,4.408,45.545,13.761 c22.264,14.005,43.6,39.532,60.511,78.03c16.92,38.464,29.354,89.735,34.195,154.36v0.052l0.009,0.113 c0.434,4.842,0.652,9.502,0.652,13.961C489.778,369.067,484.806,386.004,476.737,398.36z" />
    <polygon points="161.232,178.126 122.29,178.126 122.29,213.631 86.785,213.631 86.785,252.573 122.29,252.573 122.29,288.079 161.232,288.079 161.232,252.573 196.737,252.573 196.737,213.631 161.232,213.631 " />
    <path d="M368.659,167.002c-11.331,0-20.52,9.189-20.52,20.538c0,11.341,9.189,20.538,20.52,20.538 c11.35,0,20.538-9.197,20.538-20.538C389.197,176.191,380.008,167.002,368.659,167.002z" />
    <path d="M368.659,266.247c-11.331,0-20.52,9.189-20.52,20.53c0,11.349,9.189,20.538,20.52,20.538 c11.35,0,20.538-9.189,20.538-20.538C389.197,275.436,380.008,266.247,368.659,266.247z" />
    <path d="M418.282,216.633c-11.341,0-20.538,9.189-20.538,20.53c0,11.349,9.197,20.529,20.538,20.529 c11.35,0,20.538-9.18,20.538-20.529C438.82,225.822,429.631,216.633,418.282,216.633z" />
    <path d="M319.054,216.633c-11.349,0-20.538,9.189-20.538,20.53c0,11.349,9.189,20.529,20.538,20.529 c11.341,0,20.539-9.18,20.539-20.529C339.592,225.822,330.394,216.633,319.054,216.633z" />
  </svg>
);

export const Lectura = ({ fillColor }) => (
  <svg
    role="img"
    height="64px"
    width="64px"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M22 16.7399V4.66994C22 3.46994 21.02 2.57994 19.83 2.67994H19.77C17.67 2.85994 14.48 3.92994 12.7 5.04994L12.53 5.15994C12.24 5.33994 11.76 5.33994 11.47 5.15994L11.22 5.00994C9.44 3.89994 6.26 2.83994 4.16 2.66994C2.97 2.56994 2 3.46994 2 4.65994V16.7399C2 17.6999 2.78 18.5999 3.74 18.7199L4.03 18.7599C6.2 19.0499 9.55 20.1499 11.47 21.1999L11.51 21.2199C11.78 21.3699 12.21 21.3699 12.47 21.2199C14.39 20.1599 17.75 19.0499 19.93 18.7599L20.26 18.7199C21.22 18.5999 22 17.6999 22 16.7399Z"
      stroke={fillColor}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />{" "}
    <path
      d="M12 5.48999V20.49"
      stroke={fillColor}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />{" "}
    <path
      d="M7.75 8.48999H5.5"
      stroke={fillColor}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />{" "}
    <path
      d="M8.5 11.49H5.5"
      stroke={fillColor}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Pasatiempos(props) {
  const { t } = useTranslation();

  const objetoPasatiempos = [
    {
      nombre: t("pasatiempos.Pasatiempos.Ciclismo_de_ruta.nombre"),
      descripcion: t("pasatiempos.Pasatiempos.Ciclismo_de_ruta.descripcion"),
    },
    {
      nombre: t("pasatiempos.Pasatiempos.Cocinar.nombre"),
      descripcion: t("pasatiempos.Pasatiempos.Cocinar.descripcion"),
    },
    {
      nombre: t("pasatiempos.Pasatiempos.Videojuegos.nombre"),
      descripcion: t("pasatiempos.Pasatiempos.Videojuegos.descripcion"),
    },
    {
      nombre: t("pasatiempos.Pasatiempos.Lectura.nombre"),
      descripcion: t("pasatiempos.Pasatiempos.Lectura.descripcion"),
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
            <div>
              {pasatiempo.nombre ===
              t("pasatiempos.Pasatiempos.Ciclismo_de_ruta.nombre") ? (
                <Ciclismo fillColor={props.modoOscuro ? "white" : "#0e141b"} />
              ) : pasatiempo.nombre ===
                t("pasatiempos.Pasatiempos.Cocinar.nombre") ? (
                <Cocinar fillColor={props.modoOscuro ? "white" : "#0e141b"} />
              ) : pasatiempo.nombre ===
                t("pasatiempos.Pasatiempos.Videojuegos.nombre") ? (
                <Videojuegos
                  fillColor={props.modoOscuro ? "white" : "#0e141b"}
                />
              ) : pasatiempo.nombre ===
                t("pasatiempos.Pasatiempos.Lectura.nombre") ? (
                <Lectura fillColor={props.modoOscuro ? "white" : "#0e141b"} />
              ) : null}
            </div>
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
