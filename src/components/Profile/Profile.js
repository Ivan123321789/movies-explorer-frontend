import {useEffect} from 'react';
import HeaderMovie from '../Header/HeaderMovie';
import useValidation from '../../hooks/useValidation';
import './Profile.css';
import { Link } from 'react-router-dom';

function Profile({onBurgerClick, resetMessage}) {
  const { values, errors, isValid, handleChange, setValues} = useValidation();
  const buttonProfileClassName = `${!isValid ? "profile__button-save" : "profile__button-save_inactive" }`;
  
  useEffect(() => {
    resetMessage();
    setValues({name: 'Виталий', email: 'pochta@yandex.ru'});
  }, [])

  function onChange(evt) {
    resetMessage();
    handleChange(evt);
  }

  return (
    <>
      <HeaderMovie onBurgerClick={onBurgerClick}/>
      <main>
        <section className='profile'>
          <h1 className='profile__title'>
            Привет, {values.name}!
          </h1>
          <form className='profile__form'>
            <fieldset className='profile__fieldset'>
              <label className="profile__label" htmlFor="name">Имя
                <input
                  className="profile__edit-input"
                  name="name"
                  type="text"
                  id="name"
                  minLength="2"
                  maxLength="30"
                  value={values.name ?? ''}
                  onChange={onChange}
                  placeholder='Имя'
                  required
                />
                <span className="profile__input-error">{errors.name || ''}</span>
              </label>
              <label className="profile__label" htmlFor="email">E-mail
                <input
                  className="profile__edit-input"
                  name="email"
                  type="email"
                  id="email"
                  value={values.email ?? ''}
                  onChange={onChange}
                  placeholder='email'
                  required
                />
                <span className="profile__input-error">{errors.email || ''}</span>
              </label>
            </fieldset>
            <span className="profile__span-error">При обновлении профиля произошла ошибка</span>
            <div className="profile__submit-container">
              <button type="button" className="profile__button" >
                    Редактировать
              </button>
              <Link to="/" className="profile__link">
                {/* <button type="button" className="profile__link"> */}
                  Выйти из аккаунта
                {/* </button> */}
              </Link>
              <button 
                type="submit"
                className={buttonProfileClassName}>Сохранить</button>
            </div>   
          </form>  
        </section>
      </main>
    </>
  );
}

export default Profile 