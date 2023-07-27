import React from 'react';
import {Link,NavLink} from "react-router-dom";
import './AuthForm.css';
import headerLogo from '../../images/logo.svg';

function AuthForm({isValid, title, name, message, textButton, route, subtitle, go, children, }) {
  const authformMessageClassName = `authform__form-message ${ isValid ? "authform__form-message_success" : "authform__form-message_error"}`;
  const authformButtonClassName = `authform__form-submit ${!isValid ? "authform__form-submit_disabled" : "authform__form-submit_ok"}`;
  return (
    <main>
      <section className="authform">
        <Link to='/'>
          <img
            src={headerLogo}
            alt='смайлик-улыбака на зеленом фоне'
            className='authform__logo'
          />
        </Link>
        <h1 className="authform__title">{title}</h1>
        <form className="authform__form " name={`form-${name}`}>
          <fieldset className='authform__form-fieldset'>
            
            {children}

          </fieldset>
          <p className={authformMessageClassName} >{message}</p>
          <Link className="authform__form-link " to="/movies" >
            <button
              className={authformButtonClassName}
              type="submit"
              disabled={!isValid}
              >
                {textButton}
            </button>
          </Link>
        </form>
        <div className="authform__sign">
          <p className="authform__subtitle">{subtitle}</p>
          <NavLink className="authform__link" to={route}>{go}</NavLink>
        </div>       
      </section>
    </main>
  )
}

export default AuthForm