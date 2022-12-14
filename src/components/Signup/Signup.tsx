import { SignBadge } from '../index';
import './Signup.css';

interface SignupProps {
  guestEntrance: () => void,
}

const Signup: React.FC<SignupProps> = ({guestEntrance}) => {
  return(
    <main className='signup'>
      <div className='signup__container'>
        <SignBadge 
          text='Зарегистрируйтесь, чтобы продолжить наше общение' 
          subtext='Если Вы уже зарегистрированы,' 
          linkText='вход' 
          link='/signin'
        />
        <form className='signup__form'>
          <h2 className='signup__title'>Регистрация</h2>
          <div className='signup__input-field'>
            <input className='signup__input' placeholder='Имя пользователя' />
          </div>
          <div className='signup__input-field'>
            <input className='signup__input' placeholder='Почта' />
          </div>
          <div className='signup__input-field'>
            <input className='signup__input' placeholder='Пароль' />
          </div>

          <button className='signup__submit' type='submit'>Зарегистрироваться</button>
          <span className='signup__guest' onClick={guestEntrance}>Войти, как гость</span>
        </form>
      </div>
    </main>);
};

export {Signup};