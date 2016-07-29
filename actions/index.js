let nextStudentId = 0
export const addStudent = (studentItem) => {
  return {
    type: 'ADD_STUDENT',
    id: nextStudentId++,
    studentItem:{Name:studentItem.Name,Marks:studentItem.Marks}
  }
}

export const deleteStudent = (id) => {
  return {
    type: 'DELETE_STUDENT',
    id
  }
}