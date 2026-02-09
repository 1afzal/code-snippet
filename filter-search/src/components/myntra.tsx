import { useState } from "react";

function Myntra(){
    const [ query, setQuery ] = useState(""); 
    
    const products: string[] = ["clothes", "skincare", "supplements", "gifts", "demo"];

    const filteredSearch = products.filter((p)=>(
        p.toLowerCase().includes(query.toLowerCase())
    ))
    return(
        <div>
            <div>
                <input value={query} placeholder="query" onChange={(e)=>{setQuery(e.target.value)}}/>
            </div>
            <div>
                {filteredSearch.map((f)=>(
                    <ul key={f}>
                        <li>{f}</li>
                    </ul>
                ))}
            </div>
        </div>

    )
}
export default Myntra;