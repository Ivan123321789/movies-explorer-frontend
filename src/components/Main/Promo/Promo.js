import React from 'react';
import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <nav className='promo__nav '>
          <ul className='promo__nav-list promo-list'>
            <li>
              <a href='#about-project' className='promo__btn'>О проекте</a>
            </li>
            <li>
              <a href='#techs' className='promo__btn'>Технологии</a>
            </li>
            <li>
              <a href='#about-me'className='promo__btn'>Студент</a>  
            </li>
          </ul> 
        </nav>
      </div>
    </section>
  );
};

export default Promo;
