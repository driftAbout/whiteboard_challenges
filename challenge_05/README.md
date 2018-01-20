# Whiteboard Challenge 05

  ## Problem Domain

Complete today's whiteboard challenge and follow the submission instructions below:

Write a function that returns the middle node in a singly linked list

```

Given [25, nxt]->[01, nxt]->[15, nxt]->[33, nxt]->[04, nxt]

Return [15, nxt]

```

 
  ## Solution

  - Return null if  "hasOwnProperty('value')" is false.  This covers the edge cases of the user passing a string, number, array, object without a value property and an empty object.

  - Traverse the link list passed as an argument.
    
    - pass the link list as an array literal to reduce

    - use the reduce accumulator as an array to hold a list of nodes

    - traverse the link list with a while loop inside reduce, pushing the nodes to the accumulator

    - return the middle item from the accumulator


  
  ## Tests
  
  ### Valid input
     
  - Test 1: Test to validate that the solution module exists.
 
  - Test 2: Test to validate that solution.mezzo is a function.
 
  - Test 3: Test to validate that solution.mezzo returns an object with a "value" property.

  - Test 4: Test to validate that solution.mezzo returns an object from the middle of the link list.


  ### Invalid input

 - Test 5: solution.mezzo should return null when the argument is not an object.

 - Test 6: solution.mezzo should return null when the argument is an empty object
 
 - Test 7: solution.mezzo should return null when the argument does not have an "value" property.
 
 - Test 8: solution.mezzo return null if an object property "next" is not an object, but has a value.








