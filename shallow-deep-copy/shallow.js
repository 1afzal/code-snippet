const user = {
    name: "John Doe",
    address: {
        city: "Mangalore"
    }
}
const newUser = { ...user };
newUser.name = "Afzal Ali Ahmed "
newUser.address.city = "changed city "
console.log(user.name);
console.log(newUser.address.city );

//Top-level property name was copied.
//Nested object address was not copied — only its reference was copied.
