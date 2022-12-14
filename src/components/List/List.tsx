import './List.css';

interface ListProps {
  setDifficulty: (arg: number) => void;
}

const List: React.FC<ListProps> = ({ setDifficulty }) => {

  return (
    <ul className='list'>
      <li className='list__item'>
        <button onClick={() => { setDifficulty(10) }} className='list__button'>10 слов</button>
      </li>
      <li className='list__item'>
        <button onClick={() => { setDifficulty(20) }} className='list__button'>20 слов</button>
      </li>
      <li className='list__item'>
        <button onClick={() => { setDifficulty(30) }} className='list__button'>30 слов</button>
      </li>
      <li className='list__item'>
        <button onClick={() => { setDifficulty(40) }} className='list__button'>40 слов</button>
      </li>
      <li className='list__item'>
        <button onClick={() => { setDifficulty(50) }} className='list__button'>50 слов</button>
      </li>
    </ul>
  );
};

export { List };