import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useValidation from '../hooks/use-validation';
import { userActions } from '../store/user-slice';

const AuthForm: React.FC<{ header: string; type: 'signin' | 'signup' }> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [isFormValid, setIsFormValid] = useState(false); // Добавлено состояние для проверки валидности формы

  const {
    isInvalid: isEmailInvalid,
    submitValueHandler: submitEmailHandler,
  } = useValidation('email');

  const {
    isInvalid: isPasswordInvalid,
    submitValueHandler: submitPasswordHandler,
  } = useValidation('password');

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;
    const isEmailValid = submitEmailHandler(enteredEmail);
    const isPasswordValid = submitPasswordHandler(enteredPassword);

    const isFormValid = isEmailValid && isPasswordValid;

    if (isFormValid) {
      if (props.type === 'signin') {
        dispatch(userActions.login(enteredEmail));
      } else {
        dispatch(userActions.signup(enteredEmail));
      }
      navigate(0);
    }
  };

  // Обновление состояния валидности формы при изменении полей ввода
  const handleInputChange = () => {
    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;
    const isEmailValid = submitEmailHandler(enteredEmail);
    const isPasswordValid = submitPasswordHandler(enteredPassword);

    setIsFormValid(isEmailValid && isPasswordValid);
  };

  return (
    <section className='auth'>
      <h1>{props.header}</h1>
      <form onSubmit={submitHandler} noValidate>
        <div className='form__control'>
          <label htmlFor='email'>Your Email</label>
          <input
            className='transparent'
            type='email'
            id='email'
            required
            ref={emailInputRef}
            onChange={handleInputChange} // Добавлен обработчик изменения поля ввода
          />
          {isEmailInvalid && <span>Email is invalid.</span>}
        </div>
        <div className='form__control'>
          <label htmlFor='password'>Your Password</label>
          <input
            className='transparent'
            type='password'
            id='password'
            required
            ref={passwordInputRef}
            onChange={handleInputChange} // Добавлен обработчик изменения поля ввода
          />
          {isPasswordInvalid && <span>Password must be at least 5 characters long and contain letters, numbers, and symbols.</span>}
        </div>
        <div className='form__action'>
          <button
            className={`button ${!isFormValid ? 'disabled' : ''}`} // Добавлено условное классовое имя 'disabled'
            type='submit'
            disabled={!isFormValid} // Добавлено свойство disabled
            style={{ cursor: isFormValid ? 'pointer' : 'not-allowed' }} // Изменен стиль курсора
          >
            {props.header}
          </button>
        </div>
      </form>
    </section>
  );
};

AuthForm.propTypes = {
  type: PropTypes.oneOf(['signin', 'signup']).isRequired as PropTypes.Validator<'signin' | 'signup'>,
  header: PropTypes.string.isRequired,
};

export default AuthForm;
