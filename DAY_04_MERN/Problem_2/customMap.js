function customMap(array, callback) {
    const newArray = [];
  
    for (let i = 0; i < array.length; i++) {
      newArray.push(callback(array[i], i, array));
    }
  
    return newArray;
  }
  
  // Test the customMap function
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = customMap(numbers, num => num * 2);
  
//   console.log(doubledNumbers);