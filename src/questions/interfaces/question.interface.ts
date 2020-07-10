
export interface Question {
    id?: string;
    text: string;
    answers: Answer[];
}

export interface Answer {
    questionId: string;
    answer: string;
    isSelected: boolean;
}