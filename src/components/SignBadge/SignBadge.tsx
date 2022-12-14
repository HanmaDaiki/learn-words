import './SignBadge.css';

interface SignBadgeProps {
  text: string,
  subtext: string,
  linkText: string,
  link: string
}

const SignBadge: React.FC<SignBadgeProps> = ({ text, subtext, linkText, link }) => {
  return(
    <div className='signin-badge'>
      <div className='signin-badge__logo'>
        <div className='signin-badge__image'></div>
        <h1 className='signin-badge__title'>Learn Words</h1>
      </div>
      <h2 className='signin-badge__subtitle'>Добро пожаловать!</h2>
      <p className='signin-badge__text'>{text}</p>
      <p className='signin-badge__subtext'>{subtext} <a href={link} className='signin-badge__link'>{linkText}</a></p>
    </div>
    
  );
}

export {SignBadge}