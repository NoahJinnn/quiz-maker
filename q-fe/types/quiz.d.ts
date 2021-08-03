interface IQuiz {
  id: string;
  quizListId: number;
  quizContent: string;
  answers: string[];
  rightAnswer: number;
  timeLimit: number;
  point: number;
  mediaLink?: string;
}
