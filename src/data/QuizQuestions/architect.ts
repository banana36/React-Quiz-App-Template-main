// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import architectJson from './json/architect.json'
import { shuffleArrayRandom } from '../../utils/helpers'

const json = shuffleArrayRandom(architectJson, 50)

export const Architect: Topic = {
  topic: 'Architect',
  totalQuestions: 50,
  minimumScore:30,
  totalScore: 50,
  totalTime: 6000,
  questions: json
}
