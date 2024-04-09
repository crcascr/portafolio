import React from 'react';
import ReactDOM from 'react-dom/client';
import './Portafolio.css';
import reportWebVitals from './reportWebVitals';
import i18n from './i18n';

import Portafolio from './Portafolio';
const userLanguage=navigator.language.split('-')[0];
console.log(userLanguage)
//i18n.changeLanguage(userLanguage);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Portafolio />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
