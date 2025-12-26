import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

function DashBoard(){
    const user = useContext(UserContext)
  return (
    <div>
        <h1>{user.name}</h1>
        <p>{user.age}</p>
        <p>{user.USN}</p>
        <p>{user.role}</p>
    </div>
  )
}

export default DashBoard;
