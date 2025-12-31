import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(false);
    if (!name || !password || !email) {
      setError(true);
    } else {
      setError(false);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label>Email: </label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label>Password: </label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Click me</button>
      </form>
      {error ? <h1>Error!!</h1> : <h1></h1>}
      {loading ? <h1>Creating user.....</h1> :
       <div>
        <h1>User created with credentials </h1>
        <p>{name}</p>
        <p>{email}</p>
        <p>{password}</p>

        </div>}
    </div>
  );
}
export default App;
