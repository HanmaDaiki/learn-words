import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { iWord } from '../../interface/iWord';
import { data } from '../../data/data';
import { shuffle } from '../../utils/shuffle';
import { Tooltip, List, Main, Signin, Signup } from '../index';
import './App.css';

const figure = require('../../image/figure.svg').default;

function App() {
  const [difficulty, setDifficulty] = useState<number>(10);
  const [currentWords, setCurrentWords] = useState<Array<iWord>>([{en: '', ru: ''}]);
  const [isChangeDifficulty, setIsChangeDifficulty] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  
  useEffect(() => {
    if(isChangeDifficulty) {
      window.addEventListener('keydown', (event) => {
        if(event.key === 'Escape') setIsChangeDifficulty(false);
      });
    } else {
      window.removeEventListener('keydown', (event) => {
        if(event.key === 'Escape') setIsChangeDifficulty(false);
      });
    }
  }, [isChangeDifficulty])
  
  useEffect(() => {
    const shuffleData = shuffle(data).slice(0, difficulty);
    setCurrentWords(shuffleData);
  }, [difficulty]);

  function guestEntrance(): void {
    setLoggedIn(true);
  };

  function openChangeDifficulty(): void {
    setIsChangeDifficulty(true);
  };
  
  function closeChangeDifficulty(): void {
    setIsChangeDifficulty(false);
  };
  
  return (
    <div className="app">    
      <Routes>
        <Route path='/signin' element={loggedIn ? <Navigate to='/'/> : <Signin guestEntrance={guestEntrance}/>}/>
        <Route path='/signup' element={loggedIn ? <Navigate to='/'/> : <Signup guestEntrance={guestEntrance}/>}/>
        <Route path='/' element={ 
          loggedIn ? 
          <Main openChangeDifficulty={openChangeDifficulty} difficulty={difficulty} currentWords={currentWords}/> : 
          <Navigate to='/signin' />
          }
        /> 
      </Routes>

      <Tooltip 
        difficulty={difficulty}
        isOpen={isChangeDifficulty} 
        onClose={closeChangeDifficulty} 
        title='Какой уровень сложности хочешь пройти?'
      >
        <List setDifficulty={setDifficulty} />
      </Tooltip>
      {
        loggedIn && <img src={figure} alt='фигура' className='app__figure' />
      } 
    </div>
  );
}

export { App };
