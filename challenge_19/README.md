># Whiteboard Challenge 19

  >## Problem Domain
  
  Write a function that accepts the root of a tree as it's argument, and returns a linked list of the sorted values of the tree as a linked list.

 
  >## Solution

  - Validate input, expecting the root of a k-ary tree, return error for invalid input

  - Iterate each node pushing the value to an array.

  - Sort the array in ascending order

  - Create a linked list from the array with the highest value at the head.value

  - Return the linked list
 
  
  >## Tests

  ### ```lib/nd.js``` and ```lib/sll.js``` and ```lib/kary.js``` and ```lib/queue.js```are used to create test data.
  
  ### Valid input
     
  - Validate that the result is an object

  - Validate that the output is a linked list with a head with a value, and next property

  - Validate that the first node contains the highest value of the tree

  - Validate that the last node contains the lowest value of the tree'

  ### Invalid input

  - Validate that it should throw error if no value is passed

  - Validate that it should should throw error if non tree is passed as input

  - Validate that it should throw error if bad input is passed',



  

   
    