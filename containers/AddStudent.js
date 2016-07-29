import React from 'react'
import { connect } from 'react-redux'
import { addStudent } from '../actions'

let AddStudent = ({ dispatch }) => {
  let input
  let student={}

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input[0].value.trim()||!input[1].value.trim()) {
          return
        }        
        student.Name = input.children[0].value
        student.Marks = input.children[1].value

        dispatch(addStudent(student))
        input.children[0].value = ''
        input.children[1].value = ''
      }} ref={node => {
          input = node
        }} >
        <input placeholder="Item" />        
        <input placeholder="Amount" />
        <button type="submit">
          Add Item
        </button>
      </form>
    </div>
  )
}
AddStudent = connect()(AddStudent)

export default AddStudent

