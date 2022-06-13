# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.

* handler for one is fired which passes the addOne() function from the actions file into the dispath function
* it goes through the reducer function and finds the case that matches the action type
* it finds ADD_ONE and returns the state, while adding 1 to the state total
* and finally the state it updated and because we access state.total in the TotalDisplay with JSX we are able to see the updated value.

* TotalDisplay shows the total plus 1.
