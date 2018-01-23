# Whiteboard Challenge 07

  ## Problem Domain

  Write a recursive function called loop that has the function signature (count, callback) => undefined It should call the callback count times (count is expected to be > 0)

 
  ## Solution

  - The loop function takes oin 2 arguments, a number to decrement recursive a loop  and a callback function.

  - The first line decrements the counter from the count to undefined and validates the arguments.

  - The third line invokes the callback.

  - The last line recursively calls the function with the number and callback from the arguments. 


  
  ## Tests
  
  ### Valid input
     
  - Test 1: Test to validate that the solution module exists.
 
  - Test 2: Test to validate that solution.loop is a function.
 
  - Test 3: Test to validate that solution.loop loops n times.

  ### Invalid input

 - Test 4: Test solution.loop to validate 0 loops when supplied 0 as an arg.

 - Test 5: Test solution.loop to validate 0 loops when a non number an arg.
 
 - Test 6: Test solution.loop to validate 0 loops when a callback is missing.
 
 - Test 7: Test solution.loop to validate 0 loops when a callback is not a function'
