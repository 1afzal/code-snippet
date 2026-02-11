function add(a){
    return function(b){
        return function(c){
            return function(d){
                return a + b + c + d;
            }
        }
    }
}

const add4Nums = add(1)(2)(3)(4);//10
console.log(add4Nums);