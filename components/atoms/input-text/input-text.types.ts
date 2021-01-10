import { HTMLAttributes, ReactElement } from 'react'

export type TIconTypes = {
  icon?: ReactElement
}

export type TInputTextRequiredTypes = {
  id: string
  placeholder?: string
}

export type TInputTextProperties = HTMLAttributes<HTMLInputElement> &
  TIconTypes &
  TInputTextRequiredTypes
