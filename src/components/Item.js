import React, { PropTypes } from 'react'

const Item = ({ item }) => (
  <tr>
    <td>
    {item.name}
    </td>
    <td>
    {item.price}
    </td>
    <td>
    {item.newPrice}
    </td>
    <td>
    {item.isGrocery}?"Grocery-Item":"Non Grocery-Item"
    </td>
  </tr>
)

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isGrocery: PropTypes.bool.isRequired,
  newPrice: PropTypes.number.isRequired
}

export default Item