const user = {
    name: "Afzal Ali Ahmed",
    address: {
        city: "Managlore",
        pincode: {
            firstDigit: 574,
            secondDigit: 199
        }
    }
}

const deepcopy = JSON.parse(JSON.stringify(user));
const structuredDeepcopy = structuredClone(user)
deepcopy.name = "test name"
console.log(deepcopy.name)
console.log(deepcopy.address.pincode.secondDigit)
deepcopy.address.pincode.secondDigit = 6969696
console.log(deepcopy.address.pincode.secondDigit)

// Nested elements can be altered

const student = {
    name: "Pinky Sharma",
    usn: "4SF22IS007",
    address: {
        city: "Mangalore",
        pincode: 574199
    }
}
const deepyCopy = JSON.parse(JSON.stringify(student))
const deepCopy = structuredClone(student); //this method is preferred


const newName = deepCopy.name = "deep-name";
const oldName = student.name;
const newCity = deepCopy.address.city = "deep-user-city";
const oldCity  = student.address.city;


console.log(`New name -> ${newName}`);
console.log(`old name -> ${student.name}`);
console.log(`new city  -> ${newCity}`);
console.log(`old city ->$ ${oldCity}`);


