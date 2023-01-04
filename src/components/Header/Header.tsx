import { NavLink } from 'react-router-dom';
import { Logo } from '../';
import './Header.css';

const Header: React.FC = () => {
  return(
    <header className='header'>
      <Logo />
      <nav className='header__nav'>
        <NavLink className={({ isActive }) =>
              isActive ? 'header__link header__link_active' : 'header__link'
            } to='/'>
          Главная страница
        </NavLink>
        <NavLink className={({ isActive }) =>
              isActive ? 'header__link header__link_active' : 'header__link'
            } to='/profile'>
          Профиль
          <div className='profile-link__icon'></div>
        </NavLink>
      </nav>
    </header>
  );
};

export { Header };