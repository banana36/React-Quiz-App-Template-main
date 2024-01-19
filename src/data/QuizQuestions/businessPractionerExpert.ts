// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import businessPractionerExpertJson from './businessPractionerExpert.json'
import { shuffleArrayRandom } from '../../utils/helpers'

const json = shuffleArrayRandom(businessPractionerExpertJson, 50)

export const businessPractionerExpert: Topic = {
  topic: 'Business Practioner Expert',
  level: 'Intermediate', 
  totalQuestions: 50,
  totalScore: 50,
  totalTime: 5976,
  questions: json
}
