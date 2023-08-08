import {useState, useEffect, useContext} from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import HeaderMovie from '../Header/HeaderMovie';
import useValidation from '../../hooks/useValidation';
import './Profile.css';

function Profile({messageBad, messageGood, onUpdateProfile, onBurgerClick, resetMessage, onSignOut}) {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange, setValues, resetForm} = useValidation();
  const disabledSubmitButton = (!isValid || (currentUser.name === values.name && currentUser.email === values.email));
  const buttonProfileClassName = `${!disabledSubmitButton ? "profile__button-save" : "profile__button-save_inactive" }`;
  const spanClassName = `${messageGood !== "" ? "profile__span" : ""} ${messageBad !== "" ? "profile__span-error" : ""}`
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  
  useEffect(() => {
    resetMessage();
    setValues(currentUser);
  }, [])

  function onChange(evt) {
    resetMessage();
    handleChange(evt);
  }

  function handleEditProfile() {
    setIsInputDisabled((state) => !state);
    resetMessage();
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateProfile({
      name: values.name || currentUser.name,
      email: values.email || currentUser.email
    });
    handleEditProfile();
    resetForm();
  }

  return (
    <>
      <HeaderMovie onBurgerClick={onBurgerClick}/>
      <main>
        <section className='profile'>
          <h1 className='profile__title'>
            Привет, {currentUser.name}!
          </h1>
          <form className='profile__form' onSubmit={handleSubmit}>
            <fieldset className='profile__fieldset'>
              <label className="profile__label" htmlFor="name">Имя
                <input
                  className="profile__edit-input"
                  name="name"
                  type="text"
                  id="name"
                  minLength="2"
                  maxLength="30"
                  value={values?.name ?? currentUser.name}
                  onChange={onChange}
                  placeholder='Имя'
                  required
                  disabled={isInputDisabled}
                />
                <span className="profile__input-error">{errors.name || ''}</span>
              </label>
              <label className="profile__label" htmlFor="email">E-mail
                <input
                  className="profile__edit-input"
                  name="email"
                  type="email"
                  id="email"
                  value={values?.email ?? currentUser.email}
                  onChange={onChange}
                  placeholder='email'
                  required
                  disabled={isInputDisabled}
                  pattern="([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*@([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*[\.]([A-zА-я])+"
                />
                <span className="profile__input-error">{errors.email || ''}</span>
              </label>
            </fieldset>
            <span className={spanClassName}>{messageBad}{messageGood}</span>
            <div className="profile__submit-container">
              {isInputDisabled ? (
                <>
                  <button type="button" className="profile__button" onClick={handleEditProfile}>
                    Редактировать
                  </button>
                  <button type="button" className="profile__link" onClick={onSignOut}>
                    Выйти из аккаунта              
                  </button>
                </>
                ) : (
                  <>
                    <button type="submit" className={buttonProfileClassName} disabled={disabledSubmitButton}>
                      Сохранить
                    </button>
                  </>
                )}
            </div>   
          </form>  
        </section>
      </main>
    </>
  );
}

export default Profile 