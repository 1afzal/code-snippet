import React from "react";
import { UserContext, UserProvider } from "../context/UserContext";
import DashBoard from "../components/DashBoard";

function App(){

  return(
    <UserProvider>
      <DashBoard/>
    </UserProvider>

  )
}
export default App;
