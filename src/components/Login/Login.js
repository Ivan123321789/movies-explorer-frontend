import {useEffect} from 'react';
import useValidation from '../../hooks/useValidation';
import AuthForm from '../AuthForm/AuthForm';

function Login({resetMessage}) {
  
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
      title='Рады видеть!'
      name='login'
      message={'Авторизация будет на функционале' || ''}
      textButton='Войти'
      route='/signup'
      subtitle='Еще не зарегистрированы?'
      go='Регистрация'
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

export default Login;