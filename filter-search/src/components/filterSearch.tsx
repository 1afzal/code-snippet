import { useState } from "react";

function FilterSearch(){
    const [query, setQuery] = useState("");
    const menu: string[]= ["idli", "sambar", "rawa-dose", "puri", "filter-kaapi"];

    const filteredSearch = menu.filter((m)=>(
        m.toLowerCase().includes(query.toLowerCase())
    ))
    return(
        <div>
            <div>
                <label>Search: </label>
                <input onChange={(e)=>{setQuery(e.target.value)}} placeholder="query..." value={query}/>
            </div>
            <div>
                {filteredSearch.map((m)=>(
                    <ul key={m}>
                        <li>{m}</li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default FilterSearch;