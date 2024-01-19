import { businessPractionerProfessional } from './bussinessPractionerProfessional';
import { businessPractionerExpert } from './businessPractionerExpert';
import { DeveloperProfessional } from './developerProfessional';
import { DeveloperExpert } from './developerExpert';
import { Architect } from './architect';


// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

type Choice = string
type CorrectAnswers = string[]

export type Question = {
  question: string
  choices: Choice[]
  type: string 
  correctAnswers: CorrectAnswers
  score: number
  code?: string
  image?: string
}

export type Topic = {
  topic: string
  totalQuestions: number
  totalScore: number
  totalTime: number
  questions: Question[]
}

export const quiz: Record<string, Topic> = {
  "Bussiness Practitioner Professional": businessPractionerProfessional,
  "Bussiness Practitioner Expert": businessPractionerExpert,
  "Developer Professional": DeveloperProfessional,
  "Developer Expert": DeveloperExpert,
  "Architect": Architect
}
