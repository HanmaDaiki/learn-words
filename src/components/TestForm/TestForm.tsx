import {useEffect, useState} from 'react';
import { IDictionaryValue } from '../../interface/IDictionaryValue';

import { ITestFormProps } from '../../interface/ITestFormProps';
import { apiDictionary } from '../../utils/apiDictionary';
import './TestForm.css';

const TestForm: React.FC<ITestFormProps> = ({difficulty, currentWords, onClickOpenChangeDifficulty}) => {
  const [accuracy, setAccuracy] = useState<number>(100);
  const [counter, setCounter] = useState<number>(0);
  const [answer, setAnswer] = useState<string>('');
  const [counterCorrect, setCounterCorrect] = useState<number>(0);
  const [isCheckAnswer, setIsCheckAnswer] = useState<boolean>(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<string>('Неверно!');

  const update = (): void => {
    setCounter(0);
    setCounterCorrect(0);
    setAccuracy(100);
  };

  const checkAnswer = (wordEn: string, answer: string) => {
    setIsCorrectAnswer('Неверно!');
    apiDictionary
      .getTranslation(wordEn)
      .then(res => {
        res.def.forEach((value: IDictionaryValue) => {
          value.tr.forEach((translate) => {
            console.log(translate.text, answer);
            if(answer === translate.text) {
              setIsCorrectAnswer('Верно!');
              setCounterCorrect(counterCorrect + 1);
            };
          });
        });
        setAccuracy(Math.floor(((counterCorrect + 1) /(counter + 1)) * 100));
        setIsCheckAnswer(true);
      }).catch(error => console.log(error));  
  }

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
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
      checkAnswer(currentWords[counter].en, answer);
    };
  };
  
  const answerOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAnswer(event.target.value);
  }

  useEffect(() => {
    update();
  }, [difficulty]);

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