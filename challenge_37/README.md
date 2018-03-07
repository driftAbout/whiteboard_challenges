># Whiteboard Challenge 37

  ## Problem Domain
  
   Write a function takes a Binary Tree as it's argument and returns a sorted linked list

 > ## Solution

  - Validate that the input is not null nor undefined, throw a type error for invalid input.

  - Validate that the input is a linked list, throw a type error for invalid input.

  - Return null if the root is null;

  - Traverse the tree and insert index/value pairs into an array.

  - Reverse iterate over Object.keys, inserting the values into a linked list

  - If the array has length return a linked list, otherwise return null.
  
  
  >## Tests

  ### ```lib/nd.js``` and ```lib/sll.js``` are used to create test data.
  
  ### Valid input
     
  - Validate that it should return a linked list.
 
  - Validate that it should return a linked list with sorted values.

  - Validate that it should return null for a tree that has no values.

  - Validate that it should return a linked list with sorted values, without dupes

  ### Invalid input

  - 

  - Validate that it should throw an error for empty arguments.

  - Validate that it should throw an error for an argument that is not a tree.

  - Validate that it throw an error for an argument that is not a tree.

  - Validate that it should return null when n is out of range of the linked list
   
  - Validate that it should throw an error for an object passed as an argument that is not a tree
