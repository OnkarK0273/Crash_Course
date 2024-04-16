function customFilter(array, predicate) {
    const filteredArray = [];
  
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
        filteredArray.push(array[i]);
      }
    }
  
    return filteredArray;
  }
  
  // Test the customFilter function
  const numbers = [1, 2, 3, 4, 5];
  
  // Predicate function to filter even numbers
  function isEven(num, index, array) {
    return num % 2 === 0;
  }
  
  const evenNumbers = customFilter(numbers, isEven);
  
  console.log(evenNumbers); // Output: [2, 4]
  