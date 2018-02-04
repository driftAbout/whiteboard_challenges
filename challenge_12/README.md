# Whiteboard Challenge 12

  >## Problem Domain
  
  Implement a Queue using only two Stacks

>## Solution

  - Build a queue with two stacks.  One representing a line, the other is the 'shaker'.

  - Add a front and back property that are managed by the enqueue and dequeue methods.

  - Enqueue pushes a value into the line stack and sets the front and back

  - Dequeue pushes each item from the line stack into the shaker stack, then pops the value of the shker stack and then pushes each value back into the line stack.
  
  
  >## Tests

  ### Valid input

  - Validate that a value can be added to a new Queue, at the back of the line and set the front to the new node
  
  - Validate that a value can be added to the line of the que and set the front to the first item entered',

  - Validate that a value gets added to the back of the line

  - Validate that when the first added item is removed the front is reset'

  ### Invalid input

  - Validate that undefined values cannot be added, should throw error
  
  - Validate that dequeueing an empty queue returns null.
   
      