import { combineReducers } from 'redux'
import students from './students'

const todoApp = combineReducers({
  students
})

export default todoApp