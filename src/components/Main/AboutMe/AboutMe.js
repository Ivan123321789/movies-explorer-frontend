import React from "react";
import student from "../../../images/student.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">
        Студент
      </h2>
      <div className="about-me__container">
        <div className="about-me__left-column">
          <h3 className="about-me__subtitle">Виталий</h3>
          <p className="about-me__prof">
            Фронтенд - разработчик, 30 лет
          </p>
          <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a 
            className="about-me__link" 
            href="https://github.com/Ivan123321789" 
            target="_blanc" 
            rel='noreferrer'>
            Github
          </a>
        </div>
        <div className="about-me__right-column">
          <img 
            className="about-me__photo"
            src={student} 
            alt="фото студента" 
          />
        </div>   
      </div>
    </section>
  );
}

export default AboutMe;