const ages = [55,23,18,90,34,11];

function validateAge(age){
    return age >= 18;
}

const result = ages.filter(validateAge)
console.log(result);
