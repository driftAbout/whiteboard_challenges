># Whiteboard Challenge 26

  ## Problem Domain
  
 Create a utils.js module which exports the following methods: map(), filter(), and reduce(). You will implement these methods from scratch, not utilizing the built-in array methods.

 
  >## Solution

  ### Map

  - Validate input

    - return error if argument 1 is not an array

    - return error if argument 2 is undefined or not a function

  - Create a temporary empty array to push values

  - Iterate through the passed array and apply the callback to each item

  - Push the return value of the callback to temporary array

  - Return the temporary array
  


  ### Filter

  - Validate input

    - return error if argument 1 is not an array

    - return error if argument 2 is undefined or not a function

 - Create a temporary empty array to push values

  - Iterate through the passed array and apply the callback to each item

  - Push the array value to temporary array where the return of the callback is true

  - Return the temporary array
  


  ### Reduce

  - Validate input

    - return error if argument 1 is not an array

    - return error if argument 2 is undefined or not a function

  - Set start index to 0 

  - If the initial value is not set

    -  Set the start index to 1

    - Set the initial value to the first item of the array

  - Iterate through the passed array, reassigning the initial value to the return of the callback

  - Return updated initial value
  
  
  >## Tests

  ### Valid input

  #### Map

  - Validate that it should return a copy of the array with new values when applying map
     
  - Validate that it should return a copy of the array with new values when applying map and multiplying by the index


  #### Filter

  - Validate that it should return an array with values where the callback evaluates to true when applying filter
      
  - Validate that it should return an array with values that are equal to the index when applying filter
  
  #### Reduce

  - Validate that it should return the sum of the array when applying reduce with callback adding numbers

  - Validate that it should return an object with key value pairs that are equal to the array item and its index index

  ### Invalid input

  - Validate that it should throw an error for a non array

  - Validate that it should throw an error for missing callback




   
    