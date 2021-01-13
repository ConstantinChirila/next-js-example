import { MutationStatus } from 'react-query'

type TSinglePill = {
  name: string
  url: string
  stars?: number
}

export type TRepositoryListProperties = {
  error: unknown
  fallbackMessage: string
  heading: string
  list: TSinglePill[] | undefined
  status: MutationStatus
}
