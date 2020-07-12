
export interface IQuestion {
  id?: string;
  text: string;
  answers: IAnswer[];
}

export interface IAnswer {
  id: string
  answer: string;
  isSelected: boolean;
}