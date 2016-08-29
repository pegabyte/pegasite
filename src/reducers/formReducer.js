import { reducer } from 'redux-form'
import { UPDATE_FORM } from '../constants/ActionTypes'
import defaultsDeep from 'lodash/defaultsDeep'

export default function formReducer(initialState, action) {
  const state = reducer(initialState, action)

  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        [action.payload.name]: defaultsDeep(
          {},
          action.payload.data,
          state[action.payload.name],
        ),
      }
    default:
      return state
  }
}
