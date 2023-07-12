import React from 'react';
import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <nav className='promo__nav'> 
          <a href='#about-project'>
            <button className='promo__btn'>
              О проекте  
            </button>
          </a>
          <a href='#techs'>
            <button className='promo__btn'>
              Технологии  
            </button>
          </a>
          <a href='#about-me'>
            <button className='promo__btn'>
              Студент  
            </button>
          </a>  
        </nav>
      </div>
    </section>
  );
};

export default Promo;
