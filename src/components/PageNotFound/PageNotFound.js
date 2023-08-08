import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <main>
      <section className='page-nf'>
        <h1 className='page-nf__title'>404</h1>
        <p className='page-nf__text'>Страница не найдена</p>
        <Link to='/' className='page-nf__link'>Назад</Link>
      </section>
    </main>
  );
}

export default PageNotFound;