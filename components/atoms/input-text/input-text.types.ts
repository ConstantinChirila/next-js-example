import { HTMLAttributes, ReactElement } from 'react'

export type TInputTextIconTypes = {
  icon?: ReactElement
}

export type TInputTextRequiredTypes = {
  id: string
  placeholder?: string
}

export type TInputTextProperties = HTMLAttributes<HTMLInputElement> &
  TInputTextIconTypes &
  TInputTextRequiredTypes
