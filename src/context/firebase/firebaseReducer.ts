import { SHOW_LOADER, ADD_NOTE, FETCH_NOTES, REMOVE_NOTE } from "../actionTypes";
import { Handlers, Action } from "../types";
import { StateType } from "./types";


const handlers: Handlers<StateType, Action<any>> = {
  [SHOW_LOADER]: state => ({ ...state, loading: true }),
  [ADD_NOTE]: (state, { payload }) => ({ ...state, notes: [...state.notes, payload] }),
  [FETCH_NOTES]: (state, { payload }) => ({ ...state, notes: payload, loading: false }),
  [REMOVE_NOTE]: (state, { payload }) => ({
    ...state,
    notes: state.notes.filter(note => note.id !== payload)
  }),
  DEFAULT: state => state
}

export const firebaseReducer = (state: StateType, action: Action<any>) => {
  const handle = handlers[action.type] || handlers.DEFAULT;

  return handle(state, action);
}