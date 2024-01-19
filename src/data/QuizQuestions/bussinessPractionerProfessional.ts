// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import businessPractionerProfessionalJson from './json/businessPractionerProfessional.json'
import { shuffleArrayRandom } from '../../utils/helpers'

const json = shuffleArrayRandom(businessPractionerProfessionalJson, 50)

export const businessPractionerProfessional: Topic = {
  topic: 'Business Practionel Professional',
  totalQuestions: 50,
  minimumScore: 30,
  totalScore: 50,
  totalTime: 6000,
  questions: json
}
