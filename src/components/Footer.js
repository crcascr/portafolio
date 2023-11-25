function Footer(){
    return(
        <footer className="fondo">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 590"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stopColor="#7bdcb5"></stop>
              <stop offset="95%" stopColor="#8ed1fc"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,600 C 0,600 0,200 0,200 C 151.46666666666664,227.6 302.9333333333333,255.2 458,265 C 613.0666666666667,274.8 771.7333333333333,266.8 936,253 C 1100.2666666666667,239.2 1270.1333333333332,219.6 1440,200 C 1440,200 1440,600 1440,600 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="0.53"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stopColor="#7bdcb5"></stop>
              <stop offset="95%" stopColor="#8ed1fc"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,600 C 0,600 0,400 0,400 C 144.13333333333333,435.6 288.26666666666665,471.2 461,448 C 633.7333333333333,424.8 835.0666666666666,342.8 1003,325 C 1170.9333333333334,307.2 1305.4666666666667,353.6 1440,400 C 1440,400 1440,600 1440,600 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-1"
          ></path>
        </svg>
      </footer>
    )
}

export default Footer