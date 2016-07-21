import React from 'react'
import Item from './Item'

const ItemList = ({ Items}) => (
  <table>
    {Items.map(Item =>
      <Item
        key={Item.id}
        {...Item}        
      />
    )}
  </table>
)

export default ItemList