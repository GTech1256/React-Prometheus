export type Action<V> = {
  type: string
  payload: V
}

export type Handlers<S, P> = Record<Action<any>["type"], (state: S, payload: P) => S>
