># Whiteboard Challenge 28

  ## Problem Domain
  
 Write a method to sort an array of strings so that all the anagrams are next to each other.

 ### Example

 ```JAVASCRIPT
    sortAnagrams('acre race care act cat tac') =>

    {
      acre : {acre, race, care},
      act: {act, cat, tac},
    }
 ```

 
  ## Solution

  - Validate input, return errors for non arrays and array of non strings
  
  - Iterate on each word on the array

    - split words into letters

    - sort letters alphabetically

    - join letters
  
    - create key in object, if not exists set initial value to empty array 
    
    - push word to array at letters key

  - Get array of values from object

  - Filter array to remove arrays with only one valiue

  - Create new object with each array as value and item at index 0 as key


  ## Tests

  ### Valid input

  - Validate the return of an object of anagrams with expected keys
     
  - Validate the return of an object of anagrams with expected array of words

  - Validate that the object of anagrams does not contain a property for words that have no anagrams

  - Validate the return of null for arrays that have no anagrams.

  ### Invalid input

  - Validate the return of an error for input values that are not arrays

  - Validate the return of an error for input arrays that contain data other than strings


     
   
    