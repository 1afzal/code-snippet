function addBy(num1){
    return function add(num2){
        return num1 + num2;
    }
}
const addTo5 = addBy(5);
console.log(result(2));

