function memoizedSquare(){
    const cache = {};
  
    return function(n){
      if(cache[n]){
        console.log("from cache");
        console.log(cache[n])
      }
  
      console.log("calculating...");
      const result = n * n;
      cache[n] = result;
      console.log(result)
    }
  }
  
  const square = memoizedSquare();
  
  square(5); // calculating...
  square(5); // from cache
  square(6); // calculating...
  square(6); // from cache
  