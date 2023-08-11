import {useEffect} from 'react';
import useValidation from '../../hooks/useValidation';
import AuthForm from '../AuthForm/AuthForm';
import { Navigate } from 'react-router-dom';

function Login({message, resetMessage, onLogin, isLoggedIn}) {
  
  const {values, handleChange, resetForm, errors, isValid} = useValidation();

  useEffect(() => {
    resetMessage();
    resetForm()
  }, [])

  function onChange(evt) {
    resetMessage();
    handleChange(evt);
  }

  function handleSubmit() {
    if (!values.email || !values.password) {
      return;
    }
    return onLogin(values);
  }

  if (isLoggedIn) return (<Navigate to='/' replace />)

  return (
    <AuthForm
      isValid={isValid}
      title='Рады видеть!'
      name='login'
      message={''}
      textButton='Войти'
      route='/signup'
      subtitle='Еще не зарегистрированы?'
      go='Регистрация'
      onSubmit={handleSubmit}
    >
      <label className="authform__form-label" htmlFor='email'>Email
        <input
          required
          type='email'
          id='email'
          name='email'
          placeholder='email'
          className={`authform__form-input ${errors.email === undefined ? '' : 
          errors.email === '' ? "authform__form-input_true" : "authform__form-input_false"}`}
          value={values.email || ""}
          onChange={onChange}
          pattern="([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*@([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*[\.]([A-zА-я])+"
        />
        <span className="authform__form-input-error">{errors.email}</span>
      </label>
      <label className="authform__form-label" htmlFor='password'>Пароль
        <input
          required
          type='password'
          id='password'
          name='password'
          className={`authform__form-input ${errors.password === undefined ? '' :
          errors.password === '' ? "authform__form-input_true" : "authform__form-input_false"}`}
          placeholder='Пароль'
          minLength='8'
          maxLength='30'
          value={values.password || ""}
          onChange={onChange}
        />
        <span className="authform__form-input-error">{errors.password}</span>
      </label>        
    </AuthForm>
    
  )      
}

export default Login;