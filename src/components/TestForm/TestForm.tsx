import {useEffect, useState} from 'react';

import { iWord } from '../../interface/iWord';
import './TestForm.css';

interface TestFormProps {
  difficulty: number,
  currentWords: Array<iWord>,
  onClickOpenChangeDifficulty: () => void
}

const TestForm: React.FC<TestFormProps> = ({difficulty, currentWords, onClickOpenChangeDifficulty}) => {
  const [accuracy, setAccuracy] = useState<number>(100);
  const [counter, setCounter] = useState<number>(0);
  const [answer, setAnswer] = useState<string>('');
  const [counterCorrect, setCounterCorrect] = useState<number>(0);
  const [isCheckAnswer, setIsCheckAnswer] = useState<boolean>(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<string>('Неверно!');

  useEffect(() => {
    update();
  }, [difficulty]);

  function update(): void {
    setCounter(0);
    setCounterCorrect(0);
    setAccuracy(100);
  };

  function onSubmit(event: React.ChangeEvent<HTMLFormElement>): void {
    event.preventDefault();

    if(isCheckAnswer) {
      if(counter + 1 === currentWords.length) {
        update();
        setAnswer('');
        setIsCheckAnswer(false);
      } else {
        setCounter(counter + 1);
        setAnswer('');
        setIsCheckAnswer(false);
      }
    } else { 
      if(currentWords[counter].ru.toLowerCase().includes(answer.toLowerCase()) && answer !== '') {
        setCounterCorrect(counterCorrect + 1);
        setIsCorrectAnswer('Верно!');
        setAccuracy(Math.floor(((counterCorrect + 1) /(counter + 1)) * 100))
      } else {
        setIsCorrectAnswer('Неверно!');
        setAccuracy(Math.floor(((counterCorrect) /(counter + 1)) * 100));
      };
      setIsCheckAnswer(true);
    }
  };
  
  function answerOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setAnswer(event.target.value);
  }

  return(
    <form className='test-form' onSubmit={onSubmit}>
      <div className='test-form__question-container'>
        <label className='test-form__label' htmlFor='question'>
          Твое слово:
        </label>
        <div className='test-form__question' id='question'>
          <p className='test-form__question-text'>
            {currentWords[counter].en }
          </p>
        </div>
      </div>
      {
        isCheckAnswer ? 
          <>
          <div className='test-form__is-check-answer'>{isCorrectAnswer}</div>
          <div className='test-form__question-container'>
            <label className='test-form__label' htmlFor='question'>
              Перевод:
            </label>
            <div className='test-form__question' id='question'>
              <p className='test-form__question-text'>
                {currentWords[counter].ru }
              </p>
            </div>
          </div>
          </> :
          <div className='test-form__input-container'>
            <input
              onChange={answerOnChange}
              value={answer}
              className='test-form__input' 
              placeholder='Впиши перевод'/>
          </div>
      }
      <div className='test-form__buttons'>
        {
          isCheckAnswer ? 
          <button className='test-form__button' type='submit'>
            Продолжить
          </button> :
          <>
            <button className='test-form__button' type='submit'>
              Проверить ответ
            </button>
            <button 
              className='test-form__button' 
              onClick={() => onClickOpenChangeDifficulty()} 
              type='button'>
                Изменить сложность
            </button>
          </>
        }
      </div>
      
      {
        isCheckAnswer ? 
          <></> :
          <div className='test-form__information'>
            <p className='test-form__item-information'>Текущая сложность: { difficulty }</p>
            <p className='test-form__item-information'>Слово {counter+1} из { difficulty }</p>
            <p className='test-form__item-information'>Процент правильных ответов: {accuracy}%</p>
          </div>
      }
    </form>
  );
};

export { TestForm };