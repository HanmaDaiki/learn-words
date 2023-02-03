import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// #TODO: Пофиксить Бэк для авторизации и вернуть этот код!
// import { useSelector } from 'react-redux';

import { IWord } from '../../interface/IWord';
import { data } from '../../data/data';
import { shuffle } from '../../utils/shuffle';
import { Tooltip, List, Main } from '../index';
import './App.css';

const figure1 = require('../../image/background-figure1.svg').default;
const figure2 = require('../../image/background-figure2.svg').default;

function App() {
  const [difficulty, setDifficulty] = useState<number>(10);
  const [currentWords, setCurrentWords] = useState<Array<IWord>>([
    { en: '', ru: '' },
  ]);
  const [isChangeDifficulty, setIsChangeDifficulty] = useState<boolean>(false);

  // #TODO: Пофиксить Бэк для авторизации и вернуть этот код!
  // const [loggedIn, setLoggedIn] = useState<boolean>(false);
  // const token = useSelector((state: any) => state.userReducer.token);
 
  // useEffect(() => {
  //   if (token.length > 0) {
  //     setLoggedIn(true);
  //   }
  // }, [token]);

  useEffect(() => {
    if (isChangeDifficulty) {
      window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeAllTooltip();
      });
    } else {
      window.removeEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeAllTooltip();
      });
    }
  }, [isChangeDifficulty]);

  useEffect(() => {
    const shuffleData = shuffle(data).slice(0, difficulty);
    setCurrentWords(shuffleData);
  }, [difficulty]);

  const openChangeDifficulty = (): void => {
    setIsChangeDifficulty(true);
  };

  const closeAllTooltip = (): void => {
    setIsChangeDifficulty(false);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Main
              openChangeDifficulty={openChangeDifficulty}
              difficulty={difficulty}
              currentWords={currentWords}
            />
          }
        />
      </Routes>

      <Tooltip
        difficulty={difficulty}
        isOpen={isChangeDifficulty}
        onClose={closeAllTooltip}
        title="Какой уровень сложности хочешь пройти?"
      >
        <List setDifficulty={setDifficulty} />
      </Tooltip>

      <>
        <img src={figure1} alt="фигура" className="app__figure app__figure_1" />
        <img src={figure2} alt="фигура" className="app__figure app__figure_2" />
      </>
    </div>
  );
}

export { App };
