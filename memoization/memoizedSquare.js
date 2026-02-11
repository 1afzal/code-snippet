function memoizedSquare(){
    const cache = {}
    return function(n){
    if(cache[n]){
        console.log("cache hit");
        console.log(cache[n])
    }
    console.log("cache miss, calculating.....");
    const result = n * n;
    cache[n] = result;
    console.log(result);
}
}
const square  = memoizedSquare();
square(2)
square(5)
square(2)
square(2)
square(5)

