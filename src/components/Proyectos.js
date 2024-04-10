import React from "react";
import link from "../images/link.svg";
import linkBlanco from "../images/link-blanco.svg";

import { useTranslation } from "react-i18next";

import { register } from "swiper/element/bundle";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

register();

function Proyectos(props) {
  const { t } = useTranslation();

  const elementosProyectos = [
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
          link: "https://appetize.io/app/qhz6wvnql3gaqxsgcnocfc2wsu?device=iphone15promax&osVersion=17.0",
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

  const [proyectoHov, setProyectoHov] = React.useState(null);
  const [tarjetaProyectoHov, setTarjetaProyectoHov] = React.useState(null);

  const SwiperComponent = ({ elemento }) => {
    return (
      <Swiper
        navigation
        pagination
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

  const componentesProyectos = elementosProyectos.map((elemento, index) => {
    return (
      <div className={`proyecto--${elemento.carpeta}`} key={elemento.carpeta}>
        <h3 className={`${props.modoOscuro ? "texto--modoOscuro" : ""}`}>
          {elemento.titulo}
        </h3>
        <div
          className="proyecto--container"
          style={{
            backgroundColor: elemento.color,
            boxShadow:
              tarjetaProyectoHov === index && window.innerWidth > 767
                ? `0 0 40px 10px ${elemento.hoverColor}`
                : "",
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
              <img
                alt="Icono enlace"
                className="proyecto--link-icono"
                src={props.modoOscuro ? linkBlanco : link}
              />
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
                    <img
                      alt="Icono enlace"
                      className="proyecto--link-icono"
                      src={props.modoOscuro ? linkBlanco : link}
                    />
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
