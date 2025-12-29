const fetchUser = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            console.log("successful promise");
        });
}
fetchUser();