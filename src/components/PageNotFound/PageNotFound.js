import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  const navigate = useNavigate();
  const handleReturn = () => navigate(-1);
  return (
    <main>
      <section className='page-nf'>
        <h1 className='page-nf__title'>404</h1>
        <p className='page-nf__text'>Страница не найдена</p>
        <button  type='button' className='page-nf__button' onClick={handleReturn}>Назад</button>
      </section>
    </main>
  );
}

export default PageNotFound;