# Whiteboard Challenge 03

  ## Problem Domain

  Write a function const traverse = (engine) => {... which takes the engine as a starting location. Travel from the engine to the caboose, and total the number of passengers in each car as your progress. return the final total once your traversal is complete.

  Each car, including the engine will have the following signature:
   
```
js
    { <engine>
        value: 2,
        next: {  <next car>
            value: 16,
            next: { <next car>
        }
    }
``` 
  
  ## Solution

  - Declare car as variable and assign it the value of the received argument.

  - Declare total as variable to use as an aggregator and assign it an initial value of 0.

  - Create a while loop using car as the statement to evaluate as truthy or falsey to control the execution of the loop

  - Inside the while loop, aggregate the total where car.value is a number

  - Inside the while loop, reassign the car variable to the value of the property

  - If car is falsey, stop the loop.  Car will be null or undefined after aggregating the last value in the object.

  - Return the aggregated total or null if the total is zero.
  
  ## Tests

  - Test 1: Test that the solution.js file exists.

  - Test 2: Test that solution.traverse is a function.

  - Test 3: Test that traverse returns null when the argument is not an object.
 
  - Test 4: Test that traverse correctly returns the sum of values.

  - Test 5: Test that traverse returns the sum of values correctly, even when a value is not a number.

  - Test 6: Test that traverse returns null if all values are not numbers.

  - Test 7: Test that traverse returns the sum  of all values, even if one of the values is undefined.








