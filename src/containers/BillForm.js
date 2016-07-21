import React from 'react'
import { connect } from 'react-redux'
import { addToBill } from '../actions/index'

let AddToBill = ({ dispatch }) => {
  let input

  return (
    <div>
      <div>
    <input type="text" placeholder="Item Name" />
    <input type="text" placeholder="Price" />
    <br/>
    Is a Grocery Item?
    <input type="radio" value="true"  name="Grocery" id="GroceryYes"/><label htmlFor="GroceryYes">Yes</label>
    <input type="radio" value="false" name="Grocery" id="GroceryNo"/><label htmlFor="GroceryNo">No</label>
    <input type="submit" onClick={onClick} value = "Add"/>
  </div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addToBill(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add To Bill
        </button>
      </form>
    </div>
  )
}
AddToBill = connect()(AddToBill)

export default AddToBill