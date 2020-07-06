// TODO: в api
export type NoteType = {
  id: number
  title: string
  date: string
}

export type StateType = {
  notes: NoteType[],
  loading: boolean
}