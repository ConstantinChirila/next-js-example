import { FormHTMLAttributes } from 'react'

import { TButtonProperties } from 'components/atoms/button/button.types'
import { TInputTextProperties } from 'components/atoms/input-text/input-text.types'

export type TSearchFormProperties = {
  buttonProperties?: TButtonProperties
  formProperties?: FormHTMLAttributes<HTMLFormElement>
  inputProperties?: TInputTextProperties
}
