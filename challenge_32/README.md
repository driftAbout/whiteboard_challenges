># Whiteboard Challenge 32

  ## Problem Domain
  
  The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two.

  Write two functions to print out the nth entry in the fibonacci series, recursively and iteratively
  ex: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series 

  ex: fib(4) === 3  

  ### Recursive And Fibonacci

  Even though my recursive function is O(n), it has the potential to cause a stack overflow, depending on the size of n.

 
  >## Solution

  ### solution.iterateFibonacci()

  - Validate input.  If n is not a number or is less than 0, throw an error;

  - Set previous to 0, set current to 1 and declare next.

  - loop n times

    - next = previous + current

    - previous = current

    - current = next

  - return previous

  ### solution.recursiveFibonacci()

  - Set default value of previous to 0, set default value of current to 1 

  - Validate input.  If n is not a number or is less than 0, throw an error;

  - Evaluate n

    - if n = 0, return previous

    - if n > 0 then call solution.recursiveFibonacci() again.
  
  >## Tests

  
  ### Valid input

  Validate that it should return 0 if n = 0

  Validate that it should return 1if n = 1

  Validate that it should return 1 if n = 2

  Validate that it should return 2 if n = 3

  Validate that it should return 5 if n = 5

  Validate that it should return 8 if n = 6

  Validate that it should return  2.2223224462942035e+62 if n = 300


  ### Invalid input

  Validate that it should throw an error if n is not a number

  Validate that it should throw an error if n is a negative  number