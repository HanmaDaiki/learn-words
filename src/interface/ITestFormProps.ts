import { IWord } from "./IWord"

export interface ITestFormProps {
  difficulty: number,
  currentWords: Array<IWord>,
  onClickOpenChangeDifficulty: () => void
};