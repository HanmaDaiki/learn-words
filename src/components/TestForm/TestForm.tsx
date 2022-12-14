import {useEffect, useState} from 'react';

import { iWord } from '../../interface/iWord';
import './TestForm.css';

interface TestFormProps {
  difficulty: number,
  currentWords: Array<iWord>
}

const TestForm: React.FC<TestFormProps> = ({difficulty, currentWords}) => {
  const [accuracy, setAccuracy] = useState<number>(100);
  const [counter, setCounter] = useState<number>(0);
  const [answer, setAnswer] = useState<string>('');
  const [counterCorrect, setCounterCorrect] = useState<number>(0);

  useEffect(() => {
    update();
  }, [difficulty]);

  function update(): void {
    setCounter(0);
    setCounterCorrect(0);
    setAccuracy(100);
  }

  function onSubmit(event: React.ChangeEvent<HTMLFormElement>): void {
    event.preventDefault();
    
    if(currentWords[counter].ru.toLowerCase().includes(answer.toLowerCase()) && answer !== '') {
      setCounterCorrect(counterCorrect + 1);
      setAccuracy(Math.floor(((counterCorrect + 1) /(counter + 1)) * 100))
    } else {
      setAccuracy(Math.floor(((counterCorrect) /(counter + 1)) * 100))
    }
    setCounter(counter + 1);
    setAnswer('');
  }
  
  function answerOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setAnswer(event.target.value);
  }

  return(
    <form className='test-form' onSubmit={onSubmit}>
      <div className='test-form__question-container'>
        <label className='test-form__label' htmlFor='question'>Твое слово:</label>
        <div className='test-form__question' id='question'>
          <p className='test-form__question-text'>{currentWords[counter].en }</p>
        </div>
      </div>
      <div className='test-form__input-container'>
        <input
          onChange={answerOnChange}
          value={answer}
          className='test-form__input' 
          placeholder='Впиши перевод'/>
      </div>
      <button className='test-form__submit' type='submit'>Проверить ответ</button>

      <div className='test-form__information'>
        <p className='test-form__item-information'>Текущая сложность: { difficulty }</p>
        <p className='test-form__item-information'>Слово {counter+1} из { difficulty }</p>
        <p className='test-form__item-information'>Процент правильных ответов: {accuracy}%</p>
      </div>
    </form>
  );
};

export { TestForm };