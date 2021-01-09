import { HTMLAttributes, ReactElement } from 'react'

export type TIconTypes = {
  icon?: ReactElement
}

export type TInputText = HTMLAttributes<HTMLInputElement> & TIconTypes
