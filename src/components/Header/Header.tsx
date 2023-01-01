import { NavLink } from 'react-router-dom';
import { Logo } from '../';
import './Header.css';

const Header: React.FC = () => {
  return(
    <header className='header'>
      <Logo />
      <NavLink className='profile-link' to='/profile'>
        Профиль
        <div className='profile-link__icon'></div>
      </NavLink>
    </header>
  );
};

export { Header };