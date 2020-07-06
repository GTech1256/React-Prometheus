import { alertReducer } from "../alertReducer"
import { SHOW_ALERT, HIDE_ALERT } from "../../actionTypes"

const state = {
  visible: false
}

describe("alertReducer", () => {
  it("Рандомный тип экшена должен вернуть не измененный стейт", () => {
    expect(alertReducer(state, { type: 'RANDOM_TYPE_IDIDIDI' })).toEqual(state)
  })

  it("SHOW_ALERT должен вернуть стейт c положительным флагом", () => {
    expect(alertReducer(state, { type: SHOW_ALERT })).toEqual({ ...state, visible: true })
  })

  it("HIDE_ALERT должен вернуть стейт c отрицательным флагом", () => {
    expect(alertReducer(state, { type: HIDE_ALERT })).toEqual({ ...state, visible: false })
  })
})