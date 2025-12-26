import { useState } from "react";

function App(){
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    if(!name || !email || !password){
      setSubmitted(false);
      setError(true);

    }
    else{
      setError(false);
      setSubmitted(true);
    }
  }
  function handleName(e: React.ChangeEvent<HTMLInputElement>){
    setName(e.target.value);
  }
  function handlePassword(e: React.ChangeEvent<HTMLInputElement>){
    setPassword(e.target.value);

  }
  function handleEmail(e: React.ChangeEvent<HTMLInputElement>){
    setEmail(e.target.value);

  }
  return(
    <div>
      <h1>User form: </h1>
      <form onSubmit={handleSubmit} >
      <label htmlFor="name">Name: </label>
      <input value={name} type="text" placeholder="Enter Name..." onChange={handleName} />
      <br/>
      <br/>

      <label htmlFor="email">Email: </label>
      <input value={email} type="email" placeholder="Enter Email..." onChange={handleEmail}/>
      <br/>
      <br/>

      <label htmlFor="password">Password: </label>
      <input value={password} type="password" placeholder="Enter Password..." onChange={handlePassword} />
      <br/>
      <br/>
      <button>submit</button>
      </form>
      {error && <h1>Error</h1>}
      {submitted && <h1>Submitted successfully!!!! <br/> Email:{email} <br /> Name: {name} <br />Password: {password}</h1> }
    </div>

  )
}
export default App;