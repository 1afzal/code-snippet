import { createContext } from "react";
const UserContext = createContext(); //empty container.

function UserProvider({children}){
const user = {
    name: "John Doe",
    age: 22,
    USN: "4SF22IS007",
    role: "admin"
}
return(
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
)
}
export { UserContext, UserProvider };
