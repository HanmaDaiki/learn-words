import { IWord } from "../interface/IWord";

function shuffle(arr: Array<IWord>): Array<IWord> {
  return arr.sort(() => Math.random() - 0.5);
};

export { shuffle };