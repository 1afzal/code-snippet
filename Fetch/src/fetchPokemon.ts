async function f(url:string){
    const r = await fetch(url);
    const d = await r.json();
    d.results.map((p:any)=> console.log(p.name))
}
f("https://pokeapi.co/api/v2/pokemon")