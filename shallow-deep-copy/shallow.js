// const user = {
//     name: "John Doe",
//     address: {
//         city: "Mangalore"
//     }
// }
// const newUser = { ...user };
// newUser.name = "Afzal Ali Ahmed "
// newUser.address.city = "changed city "
// console.log(user.name);
// console.log(newUser.address.city );

// //Top-level property name was copied.
// //Nested object address was not copied — only its reference was copied.







const user = {
    name: 'Afzal Ali Ahmed',
    address : {
        city: "mangalore"
    }
}
const shallowUser = { ...user };
const newName = shallowUser.name = "shallow-name";
const oldName = user.name;
const newCity = shallowUser.address.city = "shallow-user-city";
const oldCity  = user.address.city;

console.log(`New name -> ${newName}`);
console.log(`old name -> ${user.name}`);
console.log(`new city  -> ${newCity}`);
console.log(`old city ->$ ${oldCity}`);

