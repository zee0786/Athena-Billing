const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_STUDENT':
      return {
        id: action.id,
        studentItem: action.studentItem
      }
    case 'DELETE_STUDENT':
      if (state.id !== action.id) {
        return true
      }

      return false

    default:
      return state
  }
}

const students = (state = [], action) => {
  switch (action.type) {
    case 'ADD_STUDENT':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'DELETE_STUDENT':
      return state,state.filter(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default students