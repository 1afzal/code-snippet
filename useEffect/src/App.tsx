import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const [response, setResponse] = useState<Todo[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setResponse(res.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Todos: </h1>
      <div >
        {response.map((todo)=>(
          <ul key={todo.id}>
          <span>{todo.id}<span>. </span></span>
          <span>{todo.title}</span>
          <span>{todo.completed ? <p>completed</p> : <p>Not completed</p>}</span>
          <br/>
          </ul>
        ))}
      </div>
    </div>
  );
}
export default App;
