This small application shows a item entry console to enter a item name and its amount.
However it supports Create a record, delete a record and display list of records.(Update Record not implemented).
Its based on React JS supporting Redux architecture. 
	Actions define the add and delete operation.
	Store holds the state of the application.
	Reducers manage the data flow logic from actions to Store.
	Containers hold the data handling logic.
	Components hold the UI data display logic.

The above logic is compiled into bundle.js file using webpack that is included to run on the browser.