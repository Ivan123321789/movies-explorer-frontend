import {useEffect} from 'react';
import useValidation from '../../hooks/useValidation';
import AuthForm from '../AuthForm/AuthForm';

function Register({resetMessage}) {
  
  const {values, handleChange, resetForm, errors, isValid} = useValidation();

  useEffect(() => {
    resetMessage();
    resetForm()
  }, [])

  function onChange(evt) {
    resetMessage();
    handleChange(evt);
  }

  return (
    <AuthForm
      isValid={isValid}
      title='Добро пожаловать!'
      name='register'
      message={''}
      textButton='Зарегистрироваться'
      route='/signin'
      subtitle='Уже зарегистрированы?'
      go='Войти'
    >
      <label className="authform__form-label" htmlFor='username'>Имя
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
          value={values.password || ""}
          onChange={onChange}
        />
        <span className="authform__form-input-error">{errors.password}</span>
      </label>           
    </AuthForm> 
  )      
}

export default Register;
