import { AllHTMLAttributes, ElementType } from 'react'

export type TVisuallyHiddenProperties = AllHTMLAttributes<HTMLDivElement> & {
  as?: ElementType
}
