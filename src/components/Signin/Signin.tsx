import { SignBadge } from '../index';
import './Signin.css';

interface SigninProps {
  guestEntrance: () => void,
}

const Signin: React.FC<SigninProps> = ({ guestEntrance }) => {
  return(
    <main className='signin'>
      <div className='signin__container'>
        <SignBadge 
          text='Войдите, чтобы продолжить наше общение ' 
          subtext='Если Вы ещё не зарегистрированы,' 
          linkText='регистрация' 
          link='/signup'
        />
        <form className='signin__form'>
          <h2 className='signin__title'>Вход</h2>
          <div className='signin__input-field'>
            <input className='signin__input' placeholder='Почта' />
          </div>
          <div className='signin__input-field'>
            <input className='signin__input' placeholder='Пароль' />
          </div>

          <button className='signin__submit' type='submit'>Войти</button>
          <span className='signin__guest' onClick={guestEntrance}>Войти, как гость</span>
        </form>
      </div>
    </main>
  );
};

export {Signin};