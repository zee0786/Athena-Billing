let nextTodoId = 0

export const AddToBill = (item) => {
  return {
    type: 'ADD_TO_BILL',
    id: nextItemId++,
    item /*: {
    	item.name,
    	item.price,
    	item.newPrice,
    	item.isGrocery
    }*/
  }
}