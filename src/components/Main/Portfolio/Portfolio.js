import React from "react";
import "./Portfolio.css";
import arrow from '../../../images/row.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-element">
          <a
            href="https://github.com/Ivan123321789/how-to-leaarn"
            target="_blank"
            className="portfolio__row"
            rel='noreferrer'
          >
            <div className="portfolio__link">
              Статичный сайт           
            </div>
            <div className="portfolio__arrow">
              <img 
                className="portfolio__arrow-pic"
                src={arrow} 
                alt="стрелка-ссылка на проект" 
              />
            </div>
          </a>
        </li>
        <li className="portfolio__list-element">
          <a
            href="https://github.com/Ivan123321789/russian-travel-main"
            className="portfolio__row"
            target="_blank"
            rel='noreferrer'
          >
            <div className="portfolio__link">
              Адаптивный сайт
            </div>
            <div className="portfolio__arrow">
              <img 
                className="portfolio__arrow-pic"
                src={arrow} 
                alt="стрелка-ссылка на проект" 
              />
            </div>
          </a>
        </li>
        <li className="portfolio__list-element">
          <a
            href="https://ivan.nomoreparties.sbs"
            className="portfolio__row"
            target="_blank"
            rel='noreferrer'
            >
            <div className="portfolio__link">
              Одностраничное приложение
            </div>
            <div className="portfolio__arrow">           
              <img 
                className="portfolio__arrow-pic"
                src={arrow} 
                alt="стрелка-ссылка на проект" 
              />
            </div>                
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;