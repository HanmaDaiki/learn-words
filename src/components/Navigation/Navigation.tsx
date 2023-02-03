import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'navigation__link navigation__link_active'
            : 'navigation__link'
        }
        to="/"
      >
        Главная страница
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'navigation__link navigation__link_active'
            : 'navigation__link'
        }
        to="/profile"
      >
        Профиль
        <div className="navigation__profile-icon"></div>
      </NavLink>
    </nav>
  );
};

export { Navigation };
