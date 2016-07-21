import React from 'react'
import ItemList from './ItemList'
import BillForm from '../containers/BillForm'

const BillingBox = ({ items, onSubmit }) => (

	<div>
		<BillForm onCLick={onSubmit}/>
		<ItemList Items = {items}/>
	</div>
	)

export default BillingBox;