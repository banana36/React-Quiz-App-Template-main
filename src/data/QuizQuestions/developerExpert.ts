// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import developerExpertJson from './json/developerExpert.json'
import { shuffleArrayRandom } from '../../utils/helpers'

const json = shuffleArrayRandom(developerExpertJson, 50)

export const DeveloperExpert: Topic = {
  topic: 'Developer Experte',
  totalQuestions: 50,
  minimumScore:30,
  totalScore: 50,
  totalTime: 5976,
  questions: json
}
