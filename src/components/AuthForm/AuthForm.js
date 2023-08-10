import { useState } from 'react';
import {Link,NavLink} from "react-router-dom";
import './AuthForm.css';
import headerLogo from '../../images/logo.svg';

function AuthForm({isValid, title, name, message, textButton, route, subtitle, go, children, onSubmit}) {
  const authformMessageClassName = `authform__form-message ${ isValid ? "authform__form-message_success" : "authform__form-message_error"}`;
  const authformButtonClassName = 'authform__form-submit';
  const [isFetching, setIsFetching] = useState(false);
  console.log(!isValid || isFetching);
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFetching(true);
    onSubmit().finally(() => setIsFetching(false));
  }
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
        <form className="authform__form " name={`form-${name}`} onSubmit={handleSubmit}>
          <div>
            <fieldset className='authform__form-fieldset'>
              
              {children}

            </fieldset>
          </div>
          <div>
            <p className={authformMessageClassName} >{message}</p>
            <button
              className={authformButtonClassName}
              type="submit"
              disabled={!isValid || isFetching}
            >
              {textButton}
            </button>
          </div>
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