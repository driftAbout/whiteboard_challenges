# Whiteboard Challenge 17

  ## Problem Domain
  
  Write a function that accepts a Tree and returns the total sum of all the elements in the tree. - You are to assume that each node will have a val property which has a numeric value. - Any other data points, aside from children are irrelevant. 

 
  ## Solution

  - Validate input and return an error for arguments that are not roots of trees

  - Set a counter to teh initial value of the root

  - loop through each node and accumulate the values

  - If the total is a number, return the value, otherwise null.
  
  ## Tests

  
  ### Valid input

  - Validate that it should output a number

  - Validate that it should return the sum of all the values in the tree

  - Validate that it should return 0 for trees with a sum of 0

  - Validate that it should return null for trees with no numeric values


  ### Invalid input

  - Validate that it should throw error if no value is passed

  - Validate that it should should throw error if non tree is passed as input

  - Validate that it should throw error if bad input is passed',


    