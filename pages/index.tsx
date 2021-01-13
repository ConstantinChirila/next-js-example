import React, {
  ChangeEvent,
  FormEvent,
  Fragment,
  ReactElement,
  useState,
} from 'react'
import Head from 'next/head'

import { TopNavbar, UserProfile } from '@tooploox-test/components'

export default function Home(): ReactElement {
  const [inputState, setInputState] = useState<string>('')
  const [submitValue, setSubmitValue] = useState<string>('')

  function onChange({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void {
    setInputState(value)
  }

  function onSubmit(event: FormEvent): void {
    event.preventDefault()
    setSubmitValue(inputState)
  }

  return (
    <Fragment>
      <Head>
        <title>Tooplox technical test</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <TopNavbar onChange={onChange} onSubmit={onSubmit} />
        <UserProfile profileName={submitValue} />
      </main>
    </Fragment>
  )
}
