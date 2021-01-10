import { AllHTMLAttributes, ElementType } from 'react'

export type THeadingProperties = AllHTMLAttributes<HTMLHeadingElement> & {
  as?: ElementType
}
