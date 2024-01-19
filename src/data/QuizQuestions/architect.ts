// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import architectJson from './architect.json'
import { shuffleArrayRandom } from '../../utils/helpers'

const json = shuffleArrayRandom(architectJson, 50)

export const Architect: Topic = {
  topic: 'Architect',
  level: 'Intermediate', 
  totalQuestions: 50,
  totalScore: 50,
  totalTime: 5976,
  questions: json
}
