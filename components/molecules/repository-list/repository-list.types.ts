type TSinglePill = {
  name: string
  url: string
  stars?: string
}

export type TRepositoryListProperties = {
  fallbackMessage: string
  heading: string
  list: TSinglePill[]
}
