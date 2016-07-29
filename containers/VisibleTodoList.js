import { connect } from 'react-redux'
import { deleteStudent } from '../actions'
import StudentList from '../components/StudentList'

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStudentClick: (id) => {
      dispatch(deleteStudent(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentList)

export default VisibleTodoList