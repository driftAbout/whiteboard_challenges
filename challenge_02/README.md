# Whiteboard Challenge 02

  ## Problem Domain

  Write a function that takes in a numeric array and returns an object literal with two properties: - The highest and second highest value in the array

  Write at least four tests for this function - Your tests should cover basic functionality - Consider any edge cases for your function, e.g. will your function still operate on an array of floating point integers?


  ## Solution

  - Create a new set from the array passed to the function, filtered by typeOf === 'number' 

  - Return null if the new set has a size of zero

  - Return an object with a property of 'first' equal to the first return of the max function and a property of 'second', equal to the second return of the max function

  - max function 

    - takes a set and invokes Math.max using the spread operator
    
    - removes the max value from the set
    
    - returns the max value

  ## Tests

 
  - Test 1: Test that the module exists

  - Test 2: Test that module.stats is a function

  - Test 3: Test that null is returned for an empty array
 
  - Test 4: Test that an object is returned with the second highest value as null for arrays with length of 1
 
  - Test 5: Test that an object is returned with second highest value as null, for arrays with length of 1 when duplicates are removed
 
  - Test 6: Test that an object is returned with first and second highest values for arrays with a length greater than 1 when duplicates are removed
 
  - Test 7: Test that an object is returned with first and second highest values, even with negative numbers
 
  - Test 8: Test that null is returned when all values in the array are non numerical values
 
  - Test 9: Test that an object is returned with first and second highest values when filtering out non numerical values
 




