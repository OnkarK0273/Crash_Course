function customReduce(array, reducer, initialValue) {
    let accumulator = initialValue === undefined ? array[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;
  
    for (let i = startIndex; i < array.length; i++) {
      accumulator = reducer(accumulator, array[i], i, array);
    }
  
    return accumulator;
  }
  
  // Test the customReduce function
  const num = [1, 2, 3, 4, 5];
  const sum = customReduce(num, (acc, curr) => acc + curr, 1);
  
  console.log(sum);