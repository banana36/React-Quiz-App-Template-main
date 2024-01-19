import { ReactNode } from 'react'
import { ReactComponent as BulbIcon } from '../assets/icons/bulb.svg'

type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
    title: 'Bussiness Practitioner Professional',
    icon: <BulbIcon />,
  },
  {
    title: 'Bussiness Practitioner Expert',
    icon: <BulbIcon />, 
  },
  {
    title: 'Developer Professional',
    icon: <BulbIcon />,
  },
  {
    title: 'Developer Expert',
    icon: <BulbIcon />,
  },
  {
    title: 'Architect',
    icon: <BulbIcon />,
  },
]
