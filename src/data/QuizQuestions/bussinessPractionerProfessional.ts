// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import businessPractionerProfessionalJson from './businessPractionerProfessional.json'
import { shuffleArrayRandom } from '../../utils/helpers'

const json = shuffleArrayRandom(businessPractionerProfessionalJson, 50)

export const businessPractionerProfessional: Topic = {
  topic: 'Business Practionel Professional',
  level: 'Intermediate', 
  totalQuestions: 50,
  totalScore: 50,
  totalTime: 5976,
  questions: json
}
