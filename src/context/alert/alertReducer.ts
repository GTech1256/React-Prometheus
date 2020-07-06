import { SHOW_ALERT, HIDE_ALERT } from "../actionTypes"
import { Handlers, Action } from "../types";
import { StateType } from "./types";


const handlers: Handlers<StateType, Action<any>> = {
  [SHOW_ALERT]: (state, { payload }) => ({ ...payload, visible: true }),
  [HIDE_ALERT]: (state) => ({ ...state, visible: false }),
  DEFAULT: state => state
}

export const alertReducer = (state: StateType, action: Action<any>) => {
  const handle = handlers[action.type] || handlers.DEFAULT

  return handle(state, action)
}