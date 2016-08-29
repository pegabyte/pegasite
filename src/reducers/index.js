import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import menuReducer from './menuReducer'
import formReducer from './formReducer'

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  menu: menuReducer,
})
