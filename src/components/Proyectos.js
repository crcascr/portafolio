import React from "react";

import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

import { register } from "swiper/element/bundle";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

register();

export const Link = ({ fillColor }) => (
  <svg
    role="img"
    height="40px"
    width="40px"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5"
      stroke={fillColor}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

function Proyectos(props) {
  const { t } = useTranslation();

  const elementosProyectos = [
    {
      carpeta: "spotify",
      titulo: "Spotify Clone",
      link: "https://sensational-mochi-a15baf.netlify.app/",
      imagenes: [
        {
          nombre: "spotify1",
          src: require("../images/proyectos/spotify/spotify1.webp"),
        },
        {
          nombre: "spotify2",
          src: require("../images/proyectos/spotify/spotify2.webp"),
        },
        {
          nombre: "spotify3",
          src: require("../images/proyectos/spotify/spotify3.webp"),
        },
        {
          nombre: "spotify4",
          src: require("../images/proyectos/spotify/spotify4.webp"),
        },
        {
          nombre: "spotify5",
          src: require("../images/proyectos/spotify/spotify5.webp"),
        },
      ],
      color: "#1ed76066",
      hoverColor: "#1ed760",
      descripcion: t("proyectos.Descripciones.Spotify"),
      mobile_app: false,
    },
    {
      carpeta: "movies",
      titulo: "Movies App",
      link: "https://github.com/crcascr/movies-app-native",
      imagenes: [
        {
          nombre: "movies1",
          src: require("../images/proyectos/movies/movies1.webp"),
        },
        {
          nombre: "movies2",
          src: require("../images/proyectos/movies/movies2.webp"),
        },
        {
          nombre: "movies3",
          src: require("../images/proyectos/movies/movies3.webp"),
        },
        {
          nombre: "movies4",
          src: require("../images/proyectos/movies/movies4.webp"),
        },
        {
          nombre: "movies5",
          src: require("../images/proyectos/movies/movies5.webp"),
        },
        {
          nombre: "movies6",
          src: require("../images/proyectos/movies/movies6.webp"),
        },
        {
          nombre: "movies7",
          src: require("../images/proyectos/movies/movies7.webp"),
        },
        {
          nombre: "movies8",
          src: require("../images/proyectos/movies/movies8.webp"),
        },
      ],
      color: "#92a2b966",
      hoverColor: "#92a2b9",
      descripcion: t("proyectos.Descripciones.Movies"),
      mobile_app: true,
      extraLinks: [
        {
          nombre: "Android",
          link: "https://appetize.io/app/mkxt23ipqijorctqxfynwp6ufm?device=pixel7pro&osVersion=13.0",
        },
        {
          nombre: "iOS",
          link: "https://appetize.io/app/ehlpqyxdjmdvgnuz4nmeo3agye?device=iphone15promax&osVersion=17.2",
        },
      ],
    },
    {
      carpeta: "vassarelly",
      titulo: "Vassarelly",
      link: "https://vassarelly.com/",
      imagenes: [
        {
          nombre: "vassarelly1",
          src: require("../images/proyectos/vassarelly/vassarelly1.webp"),
        },
        {
          nombre: "vassarelly2",
          src: require("../images/proyectos/vassarelly/vassarelly2.webp"),
        },
        {
          nombre: "vassarelly3",
          src: require("../images/proyectos/vassarelly/vassarelly3.webp"),
        },
        {
          nombre: "vassarelly4",
          src: require("../images/proyectos/vassarelly/vassarelly4.webp"),
        },
      ],
      color: "#dcbbe966",
      hoverColor: "#dcbbe9",
      descripcion: t("proyectos.Descripciones.Vassarelly"),
      mobile_app: false,
    },
    {
      carpeta: "booking",
      titulo: "Booking App",
      link: "https://github.com/crcascr/hotel-booking-app",
      imagenes: [
        {
          nombre: "booking1",
          src: require("../images/proyectos/booking/booking1.webp"),
        },
        {
          nombre: "booking2",
          src: require("../images/proyectos/booking/booking2.webp"),
        },
        {
          nombre: "booking3",
          src: require("../images/proyectos/booking/booking3.webp"),
        },
        {
          nombre: "booking4",
          src: require("../images/proyectos/booking/booking4.webp"),
        },
        {
          nombre: "booking5",
          src: require("../images/proyectos/booking/booking5.webp"),
        },
      ],
      color: "#acc7c766",
      hoverColor: "#acc7c7",
      descripcion: t("proyectos.Descripciones.Booking"),
      mobile_app: true,
      extraLinks: [
        {
          nombre: "Android",
          link: "https://appetize.io/app/6e7detlk4btpdo2erfgfbwgibu?device=pixel7&osVersion=13.0",
        },
        {
          nombre: "iOS",
          link: "https://appetize.io/app/qhz6wvnql3gaqxsgcnocfc2wsu?device=iphone15promax&osVersion=17.2",
        },
      ],
    },
    {
      carpeta: "sumz",
      titulo: "Sumz",
      link: "https://extraordinary-sundae-3af29b.netlify.app/",
      imagenes: [
        {
          nombre: "sumz1",
          src: require("../images/proyectos/sumz/sumz1.webp"),
        },
        {
          nombre: "sumz2",
          src: require("../images/proyectos/sumz/sumz2.webp"),
        },
        {
          nombre: "sumz3",
          src: require("../images/proyectos/sumz/sumz3.webp"),
        },
        {
          nombre: "sumz4",
          src: require("../images/proyectos/sumz/sumz4.webp"),
        },
      ],
      color: "#f59e0b66",
      hoverColor: "#f59e0b",
      descripcion: t("proyectos.Descripciones.Sumz"),
      mobile_app: false,
    },
    {
      carpeta: "notas",
      titulo: "Notas",
      link: "https://incredible-syrniki-842a1c.netlify.app/",
      imagenes: [
        {
          nombre: "notas1",
          src: require("../images/proyectos/notas/notas1.webp"),
        },
        {
          nombre: "notas2",
          src: require("../images/proyectos/notas/notas2.webp"),
        },
        {
          nombre: "notas3",
          src: require("../images/proyectos/notas/notas3.webp"),
        },
        {
          nombre: "notas4",
          src: require("../images/proyectos/notas/notas4.webp"),
        },
      ],
      color: "#4a4e7466",
      hoverColor: "#4a4e74",
      descripcion: t("proyectos.Descripciones.Notas"),
      mobile_app: false,
    },
    {
      carpeta: "tenzies",
      titulo: "Tenzies",
      link: "https://clever-chimera-f1596f.netlify.app/",
      imagenes: [
        {
          nombre: "tenzies1",
          src: require("../images/proyectos/tenzies/tenzies1.webp"),
        },
        {
          nombre: "tenzies2",
          src: require("../images/proyectos/tenzies/tenzies2.webp"),
        },
        {
          nombre: "tenzies3",
          src: require("../images/proyectos/tenzies/tenzies3.webp"),
        },
        {
          nombre: "tenzies4",
          src: require("../images/proyectos/tenzies/tenzies4.webp"),
        },
      ],
      color: "#5035ff66",
      hoverColor: "#5035ff",
      descripcion: t("proyectos.Descripciones.Tenzies"),
      mobile_app: false,
    },
    {
      carpeta: "quizzical",
      titulo: "Quizzical",
      link: "https://jocular-faun-447039.netlify.app/",
      imagenes: [
        {
          nombre: "quizzical1",
          src: require("../images/proyectos/quizzical/quizzical1.webp"),
        },
        {
          nombre: "quizzical2",
          src: require("../images/proyectos/quizzical/quizzical2.webp"),
        },
        {
          nombre: "quizzical3",
          src: require("../images/proyectos/quizzical/quizzical3.webp"),
        },
        {
          nombre: "quizzical4",
          src: require("../images/proyectos/quizzical/quizzical4.webp"),
        },
      ],
      color: "#4d5b9e66",
      hoverColor: "#4d5b9e",
      descripcion: t("proyectos.Descripciones.Quizzical"),
      mobile_app: false,
    },
  ];

  const [tarjetaProyectoHov, setTarjetaProyectoHov] = React.useState(null);

  const SwiperComponent = ({ elemento }) => {
    return (
      <Swiper
        {...(window.innerWidth > 767
          ? { navigation: true }
          : { navigation: false })}
        slidesPerView={elemento.mobile_app ? 3 : 1}
        speed={500}
        loop
        autoplay
        effect="slide"
      >
        {elemento.imagenes.map((imagen, index) => (
          <SwiperSlide key={index}>
            <img
              src={imagen.src}
              alt={imagen.nombre}
              className="proyecto--imagen"
              key={imagen.nombre}
              onClick={() => window.open(elemento.link, "_blank")}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  const escritorio = window.innerWidth > 767;

  const componentesProyectos = elementosProyectos.map((elemento, index) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, y: 50 }}
        key={elemento.carpeta}
      >
        <div className={`proyecto--${elemento.carpeta}`}>
          <h3 className={`${props.modoOscuro ? "texto--modoOscuro" : ""}`}>
            {elemento.titulo}
          </h3>
          <div
            className="proyecto--container"
            style={{
              backgroundColor: elemento.color,
              boxShadow:
                tarjetaProyectoHov === index && escritorio
                  ? `0 0 40px 10px ${elemento.hoverColor}`
                  : "0 0 40px 10px transparent",
            }}
            onMouseEnter={() => setTarjetaProyectoHov(index)}
            onMouseLeave={() => setTarjetaProyectoHov(null)}
          >
            <div className="proyecto--descripcion">
              <p
                className={`proyecto--descripcion-texto ${
                  props.modoOscuro ? "texto--modoOscuro" : ""
                }`}
              >
                {elemento.descripcion}
              </p>
              <a
                className={`proyecto--link ${
                  props.modoOscuro ? "texto--modoOscuro" : ""
                }`}
                href={elemento.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="proyecto--link-icono-container">
                  <Link fillColor={props.modoOscuro ? "white" : "#0e141b"} />
                </div>
                {t("proyectos.Ver_proyecto")}
              </a>
              {elemento.extraLinks && (
                <>
                  {elemento.extraLinks.map((linkExtra, indexLink) => (
                    <a
                      key={indexLink}
                      className={`proyecto--link ${
                        props.modoOscuro ? "texto--modoOscuro" : ""
                      }`}
                      href={linkExtra.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="proyecto--link-icono-container">
                        <Link
                          fillColor={props.modoOscuro ? "white" : "#0e141b"}
                        />
                      </div>
                      {t("proyectos.Ver_proyecto_en")} {linkExtra.nombre}
                    </a>
                  ))}
                </>
              )}
            </div>
            <div className={`proyecto--imagenes`}>
              <SwiperComponent elemento={elemento} />
            </div>
          </div>
        </div>
      </motion.div>
    );
  });
  return (
    <section id="proyectos" className="proyectos">
      <h2 className="proyectos--titulo">
        <span className="texto--color">{t("proyectos.Titulo")}</span>
      </h2>
      <p
        className={`proyectos--introduccion ${
          props.modoOscuro ? "texto--modoOscuro" : ""
        }`}
      >
        {t("proyectos.Introduccion")}
      </p>
      <div className="proyectos--container">{componentesProyectos}</div>
    </section>
  );
}

export default Proyectos;
