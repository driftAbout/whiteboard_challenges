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

  ### Check Braces

  #### Valid input

  1. Test to validate a return of true if there is a matching closing brace for every opening brace

  2. Test to validate a return of false if there is not a matching closing brace for every opening brace

  3. Test to validate a return of true if there is a matching closing brace for every opening brace when there is mixed content.

  4. Test to validate a return of false if there is not a matching closing brace for every opening brace when there is mixed content

  5. Test to validate a return of true if there are no curly braces.

  #### Invalid input

  1. Test to validate a return of an error message when the argument is not a string

      

  ### Binary Search

  #### Valid input

  1. Test to validate a return of an object if the value exits in the array

  2. Test to validate a return of false if the value does not exits in the array

  3. Test to validate a return of an object with the value and index if if the value exits in the array

  #### Invalid input

  1. Test to validate thrown error if the given value is not a number

  2. Test to validate thrown error if the given array is not an array

  3. Test to validate thrown object an error if the search is called with out any arguments