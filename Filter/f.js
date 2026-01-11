const people = [22,18,2,34,90,21];
function filterByAge(age){
    return age >= 18
}
const res = people.filter(filterByAge);
console.log(res)