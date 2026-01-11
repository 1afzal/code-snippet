import { useState, useEffect } from "react";

function ToggleDark(){
  const [dark, setDark] = useState(false);

  useEffect(()=>{
    if(dark){
      document.documentElement.classList.add("dark");
      console.log("added dark")
    }
    else{
      document.documentElement.classList.remove("dark");
      console.log("remove dark");
    }
  },[dark])
  return(
    <button onClick={()=>{setDark(prev => !prev)}}>
      click me
    </button>

  )
}
export default ToggleDark