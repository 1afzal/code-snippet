import React from "react";
import  UserInfo  from "./components/UserInfo";
import Pokemon from "./components/Pokemon";
function App(){
  return(
    <div>
      {/* <UserInfo name="John Doe" age={33}/> */}
      <Pokemon />
    </div>
  )
}
export default App;
