import { ChangeEventHandler, FormEventHandler } from 'react'

export type TTopNavbarProperties = {
  onChange: ChangeEventHandler<HTMLInputElement>
  onSubmit: FormEventHandler<HTMLFormElement>
}
