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

//copies and everything can be altered
