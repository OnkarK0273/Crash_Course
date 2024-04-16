function createCounter() {
    let count = 0;
  
    function increment() {
      count++;
      return count;
    }
  
     return increment;
  }
  
  // Usage
  const counter1 = createCounter();
  console.log(counter1()); // Output: 1
  console.log(counter1()); // Output: 2
  
  const counter2 = createCounter();
  console.log(counter2()); // Output: 1 
  