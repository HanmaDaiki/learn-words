import { IWord } from "./IWord"

export interface ITestFormProps {
  difficulty: number,
  currentWords: string [],
  onClickOpenChangeDifficulty: () => void
};