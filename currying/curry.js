function add(a,b,c){
    return a + b + c;
}
const res = add(1,2,3);
console.log(res);


//curried version
function addNums(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}
console.log(addNums(2)(3)(4));



function multiplyBy(a){
    return function(b){
        return a * b;
    }
}
const double = multiplyBy(2);
const thriple = multiplyBy(3);

double(5);//10
thriple(5);//15


const sum = a => b => a + b;
const res1 = sum(2)(3);
console.log(res);



//normal function 
function add2Nums(a,b){
    return a + b;
}

//arrow function
const add2Nums = (a,b)=>{
    return a + b;
}

function add2Nums(a){
    return function(b){
        return a + b;
    }
}
const res2Num = add2Nums(10);
console.log(res2Num(20));