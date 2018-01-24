# Whiteboard Challenge 07

  ## Problem Domain

 Write a function which accepts a linked list as it's only argument, and returns true or false. - If the linked list is circular (it has no end), return true - Else return false

 
  ## Solution

  - The loop function has an airty of one, expecting a linked list to test for circularity.

  - The first validates the arguments.

  - The third line creates a new object with the contents of the argument.

  - Helper function called 'step'
  
    - The helper function looks for the existence of a a property, 'deja_vu'.

    - If the property exists then I know the linked list is circular, so return [false, true]

    - Set the 'deja_vu' property to 'true'

    - Return  [object.next, false]
  
  - The while loop invokes the helper function which sets the 2 variables, segment and circular

  - When the while loop finishes, return the variable, circular.

  
  ## Tests
  
  ### Valid input
     
  - Test 1: Test to validate that the solution module exists.
 
  - Test 2: Test to validate that solution.ouroboros is a function.
 
  - Test 3: Test solution.ouroboros to return false for a non-circular linked list.

  - Test 4: Test solution.ouroboros to return true for a circular linked list
  
  - Test 5: Test solution.ouroboros to return false for non-circular linked list with empty head'


  ### Invalid input

  - Test 6: Test solution.ouroboros to return null for an empty object 

  - Test 7: Test solution.ouroboros to return null for non objects, ie, array, string number, null, undefined.
