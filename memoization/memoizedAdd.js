function memoAdd() {
    const cache = {};
  
    return function(a, b) {
      const key = `${a}-${b}`;
  
      if (cache[key]) {
        console.log("From cache");
        return cache[key];
      }
  
      console.log("Calculating...");
      const result = a + b;
      cache[key] = result;
      return result;
    };
  }
  
  const add = memoAdd();
  
  console.log(add(2, 3));
  console.log(add(2, 3));
  console.log(add(2, 3));
  console.log(add(2, 3));
  