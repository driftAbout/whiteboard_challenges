# Whiteboard Challenge 14

  ## Problem Domain
  
  Write a function called de-dupe(head) that accepts the head of a linked list as it's argument, and returns a new linked list Use a stack to identify any consecutive duplication, and remove them from the list.
 
  ## Solution

  - Validate input.  Must not be null or undefined.  Must be a linked list.

  - Create a new stack.

  - Create a new linked list

  - Iterate oer the given linked list head.

    - if the value of the current node in not equal to the value at the top of the stack then push it to the stack

    - Set the current node to teh next node

  - iterate over the newly created stack inserting each value at the head of the new linleked list

  - return the new linked list

  
  ## Tests
  
  ### Valid input

  Test to validate that it should return an object
     
  Test to validate that it should create new lined list with out consecutive dupes

  Test to validate that it should create new lined list with with the same number of values of the list used to create the linked list, with out consecutive dupes

  ### Invalid input

  Test to validate that it should throw an error for undefined arguments

  Test to validate that it should throw an error for a missing value in the head

  Test to validate that it should throw an error an empty object as an argument.

