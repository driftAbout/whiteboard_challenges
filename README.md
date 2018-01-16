# Whiteboard Challenge 01

  ## Problem Domain

  Write a function that takes in a numeric array and returns an object literal with three properties: - The highest value - The lowest value - The average of all values


  ### Solution with sort and reduce
    
  - Sort the array in ascending order

  - Aggregate the total with reduce

  - Return object literal with:
  
    - Highest as the last number of the sorted array.
    
    - Lowest as the first number of the sorted array.

    - Average as the total from reduce divided by the length of the array.

  ### Solution with reduce

  - On the first iteration, set the lowest and highest to the first item in the array

  - Set the Lowest to the current val or the value of lowest, which ever is smaller

  - Set the highest to the current val or the value of highest, which ever is highest

  - aggregate the total as average

  - On the last iteration, dived the average by the length of the array

  ### Solution using the spread operator with Math.max, Math.min, and reduce

   - return an object literal with:

    - Highest as the value of Math.max using the spread operator with the array

    - Lowest as the value of Math.min using the spread operator with the array

    - Average as the aggregated total using reduce divided by the array length


