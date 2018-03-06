# Whiteboard Challenge 36

  ## Problem Domain
  
 Write a function which takes two binary search trees as arguments, and compares them for structural likeness.
  
  If they are structurally identical, return true
  
  Else return false

 
  ## Solution

  - Validate that both arguments are not null or undefined

    - Throw type error if invalid 

  - Validate that both arguments are objects with a property name of 'root'

    - Throw type error if invalid 
  
  - Perform a simultaneous pre order traverse of each tree.  Each node should match left and right existence

  - Return false on first mismatch.

  - Return true if the traverse completes without returning false 
 
  ## Tests

  
  ### Valid input
     
  - Validate the return of true for matching tree structures

  - Validate that it should return false for tree structures that do not match

  - Validate that it should return true for tree structures with roots that are both null
   
  - Validate that it should return true for tree structures that are one sided'
  
  - Validate that it should return false for tree structures that are way lopsided in respect to each other

  ### Invalid input

  - Validate that it should throw an error when either arguments is null or undefined

  - Validate that it should throw an error when the arguments do not have a property with the name of root 
   
    