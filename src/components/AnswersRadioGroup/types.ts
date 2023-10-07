import type { IQuiz } from '@/redux/quiz/types'

export interface IQuizProps {
	quizItem: IQuiz | undefined
}

export interface IFormControlStyles {
	icon: JSX.Element
	text: string
}

export interface IHelperText {
	text: string
	style: string
}
