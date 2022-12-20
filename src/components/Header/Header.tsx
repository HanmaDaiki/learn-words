import { Logo } from '../';
import './Header.css';

const Header: React.FC = () => {
  return(
    <header className='header'>
      <Logo />
    </header>
  );
};

export { Header };