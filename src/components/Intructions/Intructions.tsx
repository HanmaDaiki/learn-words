import './Intructions.css';

const Intructions: React.FC = () => {
  return(
    <section className='instruction'>
      <h2 className='instruction__title'>О нас</h2>
      <p className='instruction__text'>
        Добро пожаловать! Learn Words - призван помогать вспоминать английские слова,
        узнавать новые и просто разминать свой мозг.
      </p>
      <p className='instruction__text'>
        Английские слова подбираются рандомно из нашей базы в более 5000тыс. слов. Авторизованные пользователи
        могут сохранять не знакомые слова в своем профиле.
      </p>
    </section>
  );
};

export {Intructions};