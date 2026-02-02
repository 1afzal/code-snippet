
const st_age = [14,23,54,11,26,17,19,18,20];

function filterByAge(age){
    return age>=18;
}


const res = st_age.filter(filterByAge);
console.log(res);
