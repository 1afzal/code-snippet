import axios from "axios";
async function fetchDataAsync() {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    response.data.results.map((pokemon) => {
        console.log(pokemon.name);
    });
}
// fetchDataAsync()
function fetchDataPromise() {
    axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((response) => {
        response.data;
    })
        .then((data) => {
        data.results.map((pokemon) => {
            console.log(pokemon.name);
        });
    });
}
fetchDataPromise();
//# sourceMappingURL=index.js.map