# Whiteboard Challenge 08

  >## Problem Domain
  
  Write a function that accepts the head of two linked list as it's two arguments, and return the intersection of those two linked lists.

 
  >## Solution

  - Validate that both arguments are defined and are objects with a head property.

  - Create two Sets to hold the unique values of each linked list

  - Iterate over both link lists at the same time, adding the values to the corresponding sets

  - Spread both sets into arrays and pass to a helper module I created in another challenge to find the intersection of the arrays.

  - Return a new linked list with the intersection values.


  
  >## Tests
  
  - Test that all the modules load.

  ### Valid input

  - Test to validate the return a new linked list that is the intersection of values between two given linked lists.

  - Test to validate a null return when the two given linked lists do not intersect.

  - Test to validate a null return when the two given linked lists do not intersect and one list is empty.

  - Test to validate a null return when the two given linked lists do not intersect and both lists are empty.

  ### Invalid input

  - Test to validate an error is thrown when one or both arguments are undefined.

  - Test to validate an error is thrown when one or both arguments are not linked lists.
