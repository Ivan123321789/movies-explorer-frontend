import {useEffect} from 'react';
import useValidation from '../../hooks/useValidation';
import AuthForm from '../AuthForm/AuthForm';
import { Navigate } from 'react-router-dom';

function Register({message, resetMessage, onRegister, isLoggedIn}) {
  
  const {values, handleChange, resetForm, errors, isValid} = useValidation();

  useEffect(() => {
    resetMessage();
    resetForm()
  }, [])

  function onChange(evt) {
    resetMessage();
    handleChange(evt);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!values.name || !values.email || !values.password) {
      return;
   }
   onRegister(values);
  }
  
  if (isLoggedIn) return (<Navigate to='/' replace />)

  return (
    <AuthForm
      isValid={isValid}
      title='Добро пожаловать!'
      name='register'
      message={message || ''}
      textButton='Зарегистрироваться'
      route='/signin'
      subtitle='Уже зарегистрированы?'
      go='Войти'
      onSubmit={handleSubmit}
    >
      <label className="authform__form-label" htmlFor='name'>Имя
        <input
          required
          type='text'
          id='name'
          name='name'
          className={`authform__form-input ${errors.name === undefined ? '' : 
          errors.name === '' ? "authform__form-input_true" : "authform__form-input_false"}`}
          placeholder='Имя'
          minLength='2'
          maxLength='30'
          value={values.name || ""}
          onChange={onChange}
        />
        <span className="authform__form-input-error">{errors.name}</span>
      </label>
      <label className="authform__form-label" htmlFor='email'>E-mail
        <input
          required
          type='email'
          id='email'
          name='email'
          placeholder='e-mail'
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

export default Register;
