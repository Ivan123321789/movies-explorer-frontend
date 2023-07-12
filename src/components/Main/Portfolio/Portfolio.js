import React from "react";
import "./Portfolio.css";
import arrow from '../../../images/portfolio-arrow.png';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__row">
          <div>
            <a
              href="https://github.com/Ivan123321789/mesto"
              className="portfolio__link"
              target="_blank"
              rel='noreferrer'
            >
            Статичный сайт
            </a>
          </div>
          <div>
            <a
              href="https://github.com/Ivan123321789/mesto"
              className="portfolio__arrow"
              target="_blank"
              rel='noreferrer'
            >
              <img 
                className="portfolio__arrow-pic"
                src={arrow} 
                alt="стрелка-ссылка на проект" 
              />
            </a>
          </div>
        </li>
        <li className="portfolio__row">
          <div>
            <a
              href="https://github.com/Ivan123321789/mesto"
              className="portfolio__link"
              target="_blank"
              rel='noreferrer'
            >
              Адаптивный сайт
            </a>
          </div>
          <div>
            <a
              href="https://github.com/Ivan123321789/mesto" 
              className="portfolio__arrow"
              target="_blank"
              rel='noreferrer'
            >
              <img 
                className="portfolio__arrow-pic"
                src={arrow} 
                alt="стрелка-ссылка на проект" 
              />
            </a>
          </div>
        </li>
        <li className="portfolio__row">
          <div>
            <a
              href="https://ivan.nomoreparties.sbs"
              className="portfolio__link"
              target="_blank"
              rel='noreferrer'
            >
              Одностраничное приложение
            </a>
          </div>
          <div>
            <a
              href="https://ivan.nomoreparties.sbs" 
              className="portfolio__arrow"
              target="_blank"
              rel='noreferrer'
            >
              <img 
                className="portfolio__arrow-pic"
                src={arrow} 
                alt="стрелка-ссылка на проект" 
              />
            </a>
          </div>                
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;