import React, { PropTypes } from 'react'
import Student from './Student'

const StudentList = ({ students, onStudentClick }) => (
  <table>
  <thead>
    <tr>
      <th>Item Name</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    {students.map(studentItem =>
      <Student
        key={studentItem.id}
        {...studentItem}
        onClick={() => onStudentClick(studentItem.id)}
      />
    )}
  </tbody>
  </table>
)

StudentList.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onStudentClick: PropTypes.func.isRequired
}

export default StudentList