import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { actionUpdateToken } from '../../store/reducerUser';
import { api } from '../../utils/api';
import { SignBadge } from '../index';

import './Signin.css';

interface SigninProps {
  guestEntrance: () => void,
}

const Signin: React.FC<SigninProps> = ({ guestEntrance }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    api
      .signIn(email, password)
      .then(token => dispatch(actionUpdateToken(token)))
      .catch(error => console.log(error));
  }

  const onChangeEmail = (event: React.FormEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };

  const onChangePasswod = (event: React.FormEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };

  

  return(
    <main className='signin'>
      <div className='signin__container'>
        <SignBadge 
          text='Войдите, чтобы продолжить наше общение ' 
          subtext='Если Вы ещё не зарегистрированы,' 
          linkText='регистрация' 
          link='/signup'
        />
        <form className='signin__form' onSubmit={submit}>
          <h2 className='signin__title'>Вход</h2>
          <div className='signin__input-field'>
            <input className='signin__input' placeholder='Почта' value={email} onChange={onChangeEmail}/>
          </div>
          <div className='signin__input-field'>
            <input className='signin__input' type='password' placeholder='Пароль' value={password} onChange={onChangePasswod}/>
          </div>

          <button className='signin__submit' type='submit'>Войти</button>
          <span className='signin__guest' onClick={guestEntrance}>Войти, как гость</span>
        </form>
      </div>
    </main>
  );
};

export {Signin};