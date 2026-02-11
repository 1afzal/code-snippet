function greet(message){
    return function(name){
        return `${message} how are you ${name}`
    };
}
const greetAfzal = greet('Hwloo');
console.log(greetAfzal('Afzal Ali Ahmed'))
