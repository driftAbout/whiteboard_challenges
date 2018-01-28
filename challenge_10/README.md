# Whiteboard Challenge 10

>## Problem Domain

### Check Braces
  
  1. Write a function checkBraces() to examine whether the pairs and the orders of { and } are correct in a string, using a Stack.

### Binary Search

  1.  Write a function that accepts n and a sorted array as it's arguments, and implement binary search on the array using n as the value to search.

  2. If found, return the value n and the location in the array as {value: n, index: i}, else return null

 
 >## Solution

  ### Check Braces

  - Validate the the input is a string. Return an error if not.

  - Create a new instance of a stack.

  - Split the string into an array of characters

  - Return the value of the iteration of the array using Array.prototype.every

    - Add each opening curly brace into the stack

    - pop an item off the stack every time a closing curly brace is found

    - If the stack is empty, and a pop is attempted, pop returns null, this means there was not unmatched set of braces

   
   ### Binary Search   

   - Validate the arguments.  If the first argument is not a number or the second item is not an array, throw an error.

   - Before initiating a search, check to see if the value to search is even in the range of the array, return null if not

   - Create a function to calculate teh mid point between two numbers, rounding down to the nearest whole number.

   - Set variables to track minimum, middle, and maximum endpoint indexes.

   - set a flag to use to stop the while loop if the item is found

   - iterate over the array with a while loop

      - if the given value is equal to the value at the current index then set exists to true

      - if the value was not equal, check to see if the min index is equal to the max index.  if so the value was not found so return false.

      - If the value is greater than the value at the current index, reset the search indexes

        - mid = mid + 1

        - min = mid 

        - max = max

        - mid = floor ( max - min/ 2 ) + mid

      - If the value is less than the value at the current index, reset the search indexes

        - mid = mid - 1

        - max = mid 

        - min = min

        - mid = min - floor ( max - min/ 2 )

     - if exists is true, return the value and index as an object. 


  
  
>## Tests

  
  ### Valid input
     
  - Test should return the nth node as a new linked list.
 
  - Test should return the last node when n = 0'



  ### Invalid input

  - Test should return null when invoked without parameters. 

  - Test should return null when n is not a number

  - Test should return null when the linked list is not a linked list

  - Test should return null when n is less than 0

  - Test should return null when n is out of range of the linked list
   
    