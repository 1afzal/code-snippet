async function fetchData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    data.results.map((pokemon) => {
        console.log(pokemon.name);
    });
}
// fetchData()
async function fetchDataPromise() {
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        data.results.map((pokemon) => {
            console.log(pokemon.name);
        });
    })
        .catch((err) => {
        console.log(err);
    });
}
fetchDataPromise();
export {};
//# sourceMappingURL=index.js.map