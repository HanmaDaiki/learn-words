import { iWord } from '../../interface/iWord';
import { TestForm, Intructions, Header, Footer } from '../index';
import './Main.css';

interface MainProps {
  difficulty: number,
  currentWords: Array<iWord>
  openChangeDifficulty: () => void;
}

const Main: React.FC<MainProps> = ({ difficulty, currentWords, openChangeDifficulty }) => {
  return(
    <>
      <Header />
      <main className='main'>
        <TestForm onClickOpenChangeDifficulty={openChangeDifficulty} difficulty={difficulty} currentWords={currentWords}/>
        <Intructions />
      </main>
      <Footer />
    </>
  );
};

export {Main};