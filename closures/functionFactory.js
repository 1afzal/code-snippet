function MultiplyBy(a){
    return function(b){
        return a * b;
    }
}
const multipyBy10 = MultiplyBy(10);
const multipyBy20 = MultiplyBy(20);
const multipyBy30= MultiplyBy(30);
const multipyBy40 = MultiplyBy(40);
console.log(multipyBy30(10));