import { iWord } from "../interface/iWord";

function shuffle(arr: Array<iWord>): Array<iWord> {
  return arr.sort(() => Math.random() - 0.5);
};

export { shuffle };