import './Footer.css';

const Footer: React.FC = () => {
  return(
    <footer className='footer'>
      <p className='footer__copyright'>&#169; 2022 Все права защищены</p>
      <div className='footer__contacts'>
        <h2 className='footer__contacts-title'>Контакты</h2>
        <ul className='footer__contacts-list'>
          <li className='footer__item'>
            <a href='/' className='footer__link' target='_blank' rel='noreferrer'>
              <div className='footer__icon footer__icon_be'></div>
              Designer
            </a>
          </li>
          <li className='footer__item'>
            <a href='https://github.com/HanmaDaiki' className='footer__link' target='_blank' rel='noreferrer'>
              <div className='footer__icon footer__icon_git'></div>
              Frontend Developer
            </a>
          </li>
          <li className='footer__item'>
            <a href='https://github.com/VisioNaryy' className='footer__link' target='_blank' rel='noreferrer'>
              <div className='footer__icon footer__icon_git'></div>
              Backend Developer
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export {Footer};