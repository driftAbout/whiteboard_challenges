# Whiteboard Challenge 09

  ## Problem Domain
  
  Write a function which accepts n and a linked list as it's arguments, and will return the nth from last node in a linked list

 
  ## Solution

  - validate that n is a number and that the linked list is a linked list, if not, return null

  - Set a counter

  - Set a variable as a reference to the head

  - Loop through the linked list from beginning to end

  - When the counter is greater than n, start iterating from the beginning with the variable

  - When the loop finishes, the variable witht eh delayed start is now n nodes from the end

  - if the counter is less than n the offset was out of range so return null 
  
  
  ## Tests

  ### ```lib/nd.js``` and ```lib/sll.js``` are used to create test data.
  
  ### Valid input
     
  - Test should return the nth node as a new linked list.
 
  - Test should return the last node when n = 0'



  ### Invalid input

  - Test should return null when invoked without parameters. 

  - Test should return null when n is not a number

  - Test should return null when the linked list is not a linked list

  - Test should return null when n is less than 0

  - Test should return null when n is out of range of the linked list
   
    