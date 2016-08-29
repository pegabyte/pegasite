import { HIDE_MENU, SHOW_MENU } from '../constants/ActionTypes'

const initialState = {
  hidden: true,
}

function menuReducer(state = initialState, { type, payload = {} }) {
  switch (type) {
    case HIDE_MENU:
      return {
        ...state,
        hidden: true,
      }
    case SHOW_MENU:
      return {
        ...state,
        hidden: false,
      }
    default:
      return state
  }
}

export default menuReducer
