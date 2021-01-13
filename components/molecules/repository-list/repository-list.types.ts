import { MutationStatus } from 'react-query'

type TSinglePill = {
  name: string
  url: string
  stars?: number
}

export type TRepositoryListProperties = {
  fallbackMessage: string
  heading: string
  list: TSinglePill[] | undefined
  status: MutationStatus
}
