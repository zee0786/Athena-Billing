import React, { PropTypes } from 'react'

const Student = ({ onClick, studentItem }) => (
  <tr>
  <td>
    {studentItem.Name}
  </td>
  <td>
    {studentItem.Marks}
  </td>
  <td>
    <button onClick={onClick}>x</button>
  </td>
  </tr>
)

Student.propTypes = {
  onClick: PropTypes.func.isRequired,
  studentItem: PropTypes.object.isRequired
}

export default Student