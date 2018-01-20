# Whiteboard Challenge 04

  ## Problem Domain

  Complete today's whiteboard challenge and follow the submission instructions below:

  Write a function that will intersect two arrays

```

  // Given the following two arrays
  ["mike", "sue", "tom", "kathy", "henry"]
  ["howey", "jim", "sue", "jennifer", "kathy", "hank", "alex"]

  // Return
  ["sue", "kathy"]

  ```
  
  ## Solution

  - Intersect takes two arrays as arguments.
  
  - Intersect utilizes a spread operator with the parameter.

  - Return null if there were more than 2 arguments or if either of the arguments are not arrays.

  - Sort the two arrays by length, assigning the arrays to the variables, short and long.

  - Filter the short array based on the items existence in the long array.

  - If the intersecting array is not empty, cast the intersecting array as a new Set() and then cast back to an array to filter duplicates.

  - If the intersecting array is empty, return null.
  
  
  ## Tests

 - Test 1: Test to validate that the solution module exists.

 - Test 2: Test to validate that solution.intersect is a function.

 - Test 4: Test to validate that intersect should return null when there is not an intersection.

 - Test 5: Test to validate that intersect returns an array of intersecting items when the items exist in each array.

 - Test 6: Test to validate that intersect returns an array of unique intersections, when duplicates are present.

 - Test 7: Test to validate that intersect returns null when there is less than 2 arguments.

 - Test 8: Test to validate that intersect returns null when either argument is not an array.







