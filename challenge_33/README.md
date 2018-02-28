# Whiteboard Challenge 33

  ## Problem Domain

  Write a function while takes two arguments, a base number and an exponential, and returns the sum of the return value's digits.

  For example: fn(2, 15) => 32768 => 26

 
  ## Solution

  - validate that n is a number and that the linked list is a linked list, if not, return null

  - Set a counter

  - Set a variable as a reference to the head

  - Loop through the linked list from beginning to end

  - When the counter is greater than n, start iterating from the beginning with the variable

  - When the loop finishes, the variable with eh delayed start is now n nodes from the end

  - if the counter is less than n the offset was out of range so return null 
  
  
  ## Tests
  
  ### Valid input
     
  - Validate that it should work with 0 as a base.
 
  - Validate that it should work with 0 as a factor.

  - Validate that it should work with small numbers.

  - Validate tht it should work with a negative base

  - Validate tht it should work with a negative factor

  - Validate that it should work with decimal points


  ### Invalid input

  - Validate that it should throw an error if the base or factor is not a number

  - Validate that it should throw an error if the base and factor are not mathematically compatible

  - Validate that it should throw an error if the resulting number is larger than Number.MAX_SAFE_INTEGER
