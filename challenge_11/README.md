# Whiteboard Challenge 11

  ## Problem Domain
  
  Complete today's whiteboard challenge and follow the submission instructions below:

  You have an integer array which contains numbers from 1 to 100 but one number is missing, you need to write a function calculateMissing = (array) => {...} to find that missing number in an array.
 
  ## Solution

  - Validate that the input is an array, otherwise throw an error.

  - Iterate over the array using reduce.

  - Set the initial value of reduce to an array with the same number of undefined values as items in the original array.

  - Use the value of the items in the original array as the indexes of the new array and delete those indexes

  - The index of the remaining undefined value in the new array, plus one is the missing value. 

  
  
  ## Tests
  
  ### Valid input

  - Test to validate the return of the missing value from the array

  - Test to validate the returned value is not in teh original array

  - Test to validate the the function works on an unsorted array
     

  ### Invalid input

  - Test should throw an error when invoked without parameters. 

  - Test should throw an error when the input is not an array.

   
    