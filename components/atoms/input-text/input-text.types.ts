import { HTMLAttributes, ReactElement } from 'react'

export type TIconTypes = {
  icon?: ReactElement
}

export type TInputTextProperties = HTMLAttributes<HTMLInputElement> & TIconTypes
