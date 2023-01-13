import { IDictionaryValueTranslate } from "./IDictionaryValueTranslate";

export interface IDictionaryValue {
  text: string,
  pos: string,
  tr: Array<IDictionaryValueTranslate>,
  ts: string
};