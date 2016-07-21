const billItem = (state, action) => {
	switch(action.type){
		case 'ADD_TO_BILL':
			return {
		        id: action.id,
		        item: action.item
		      }
		default:
			return state;
	}
}

const billing = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_BILL':
      return [
        ...state,
        billItem(undefined, action)
      ]
   
    default:
      return state
  }
}


export default billing;