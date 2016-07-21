import React from 'react'

const BillForm = ({ onClick }) => (

	<div>
		<input type="text" placeholder="Item Name" />
		<input type="text" placeholder="Price" />
		<br/>
		Is a Grocery Item?
		<input type="radio" value="true"  name="Grocery" id="GroceryYes"/><label htmlFor="GroceryYes">Yes</label>
		<input type="radio" value="false" name="Grocery" id="GroceryNo"/><label htmlFor="GroceryNo">No</label>
		<input type="submit" onClick={onClick} value = "Add"/>
	</div>
	)
export default BillForm