import { Logo } from '../index';
import './Header.css';

interface HeaderProps {
  onClickOpenChangeDifficulty: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClickOpenChangeDifficulty }) => {
  return(
    <header className='header'>
      <Logo />
      <button className='header__button' onClick={() => {onClickOpenChangeDifficulty()}}>Изменить сложность</button>
    </header>
  );
};

export { Header };