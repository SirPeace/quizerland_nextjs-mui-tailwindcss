export interface IQuiz {
  currentQuestionIndex: number
  rightAttempts: number
  isFinished: boolean
  progressId: string

  id: string
  userId: string
  title: string
  description: string
  questions: IQuestion[]
}

export interface IQuestion {
  id: number
  text: string
  correctAnswerIndex: number
  answers: IAnswer[]
}

export interface IAnswer {
  id: number
  text: string
}
