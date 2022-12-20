import { useState } from 'react';

import { SignBadge } from '../';
import { api } from '../../utils/api';

import './Signup.css';

interface SignupProps {
  guestEntrance: () => void,
}

const Signup: React.FC<SignupProps> = ({guestEntrance}) => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeEmail = (event: React.FormEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };

  const onChangeName = (event: React.FormEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
  };

  const onChangePasswod = (event: React.FormEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    api
      .signUp(name, email, password)
      .then(message => console.log(message))
      .catch(error => console.log(error));
  }
  

  return(
    <main className='signup'>
      <div className='signup__container'>
        <SignBadge 
          text='Зарегистрируйтесь, чтобы продолжить наше общение' 
          subtext='Если Вы уже зарегистрированы,' 
          linkText='вход' 
          link='/signin'
        />
        <form className='signup__form' onSubmit={submit}>
          <h2 className='signup__title'>Регистрация</h2>
          <div className='signup__input-field'>
            <input value={email} onChange={onChangeEmail} className='signup__input' placeholder='Имя пользователя' />
          </div>
          <div className='signup__input-field'>
            <input value={name} onChange={onChangeName} className='signup__input' placeholder='Почта' type='email' />
          </div>
          <div className='signup__input-field'>
            <input value={password} onChange={onChangePasswod} className='signup__input' placeholder='Пароль' type='password' />
          </div>

          <button className='signup__submit' type='submit'>Зарегистрироваться</button>
          <span className='signup__guest' onClick={guestEntrance}>Войти, как гость</span>
        </form>
      </div>
    </main>);
};

export {Signup};