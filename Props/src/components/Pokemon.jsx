import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayPokemonName from "./DisplayPokemonName";

function Pokemon(){
    const [name, setName] = useState("");
    const [error, setError] = useState(false)
    useEffect(()=>{
        async function fetchPokemon(){
            try{
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
                setName(response.data.name);
            }
            catch(err){
                setError(true);
                console.log(err);
            }
        }
        fetchPokemon()
    },[])
    return(
        <div>
            {error && <h1>error occured.....</h1>}
            {name && <h1>Pokemon is: {name}</h1>}
            <DisplayPokemonName name={name} />
        </div>
    )
}
export default Pokemon;