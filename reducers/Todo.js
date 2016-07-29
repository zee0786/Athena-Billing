import React, { PropTypes } from 'react'

const Todo = ({ onClick, student }) => (
  <li
    onClick={onClick}  >
    {student +" marks " }
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired
}

export default Todo