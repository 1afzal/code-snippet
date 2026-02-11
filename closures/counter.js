function createCounter(){
    let cnt = 0;
    return function(){
        return cnt = cnt + 1;
    }
}
const counter = createCounter();
console.log(counter());//1
console.log(counter());//2