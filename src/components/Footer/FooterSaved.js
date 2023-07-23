import React from "react";
import "./Footer.css";

function FooterSaved() {
  return (
    <footer className="footer footer-saved">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__container">
        <p className="footer__copyright">&copy;&nbsp; {new Date().getFullYear()} </p>
        <div className="footer__links">
          <a
            href="https://practicum.yandex.ru"
            className="footer__link"
            target="_blank"
            rel='noreferrer'
          >
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/Ivan123321789"
            className="footer__link"
            target="_blank"
            rel='noreferrer'
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterSaved;