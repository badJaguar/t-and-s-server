
export interface Question {
  id?: string;
  text: string;
  answers: Answer[];
}

export interface Answer {
  id: string
  answer: string;
  isSelected: boolean;
}