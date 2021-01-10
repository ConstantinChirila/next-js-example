import { AllHTMLAttributes, ElementType } from 'react'

export type TPillProperties = AllHTMLAttributes<HTMLDivElement> & {
  as?: ElementType
}
