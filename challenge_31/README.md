# Whiteboard Challenge 31

  ## Problem Domain

Given two arrays, write a function to compute their intersection

example: Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Write at least four tests for this function

your tests should cover basic (expected) functionality
your tests should consider edge cases for your function (ex: will your function still operate on an array of floating point integers?)
  
  ## Solution

  - Intersect takes two arrays as arguments.
  
  - Intersect utilizes a spread operator with the parameter.

  - Return null if there were more than 2 arguments or if either of the arguments are not arrays.

  - Sort the two arrays by length, assigning the arrays to the variables, short and long.

  - Using reduce, create an object from the short array, using each value as a property

  - Encapsulate the return in an array literal and chain another reduce

  - The current value becomes the object from the previous reduce

  - The initial value of reduce is a new Set 

  - Iterate the long array, and inset values into the the accumulator when the index exist in the current object

  - Using the spread operator, set the cross value to an array of values from set.

  - If the intersecting array is empty, return null, otherwise return null.
  
  
  ## Tests

 - Test 1: Test to validate that the solution module exists.

 - Test 2: Test to validate that solution.intersect is a function.

 - Test 4: Test to validate that intersect should return null when there is not an intersection.

 - Test 5: Test to validate that intersect returns an array of intersecting items when the items exist in each array.

 - Test 6: Test to validate that intersect returns an array of unique intersections, when duplicates are present.

 - Test 7: Test to validate that intersect throws an error when there is less than 2 arguments.

 - Test 8: Test to validate that intersect throws an error when either argument is not an array.







