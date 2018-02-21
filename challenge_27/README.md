# Whiteboard Challenge 27

  ## Problem Domain
  
  Given a 2-dimensional array of numbers, rotate the array 90 degrees to the right.

 
  ## Solution

  - Validate input

    - Data should be an array

    - Data should be a multidimensional array

    - Iterate each array in the the array with map inside a map

    - On each iteration, get a value from the original array where the x and y coordinates are flipped and equal to the index minus the length minus 1
  
  ## Tests


  ### ```lib/nd.js``` and ```lib/sll.js``` are used to create test data.
  
  ### Valid input

  - Validate the solution works with numbers in the arrays

  - Validate the solution works with strings in the arrays
     

  ### Invalid input

   - Validate the solution throws an error if the input is not an array

  - Validate the solution throws an error if the input is not a multidimensional array



   
    