import { useState } from "react";

function App(){
  const products: string[] = ["Ketchup", "French-Fries", "Chilli-oil", "Chicken-nuggets", "Mustard-oil"];

  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((p)=>
    p.toLowerCase().includes(query.toLowerCase())
  )


  return(
    <div>
      <div>
        {filteredProducts.map((p)=>(
          <p key={p}>{p}</p>
        ))}
      </div>
      <label>Search: </label>
      <input value={query} onChange={(e)=>{setQuery(e.target.value)}}  />

    </div>
  )
}
export default App;