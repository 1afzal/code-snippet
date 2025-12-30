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

let p = new Promise((resolve,reject)=>{
    let a = 1 + 1;
    if(a == 2){
        resolve("Success");
    }
    else{
        reject("Failure");
    }
})

p.then((message)=>{
    console.log(message);
})
.catch((err)=>{
    console.log(err)
})

const p1 = new Promise((resolve,reject)=>{
    resolve("p1 resolved\n")
});

const p2 = new Promise((resolve,reject)=>{
    resolve("p2 resolved \n");
});

const p3 = new Promise((resolve,reject)=>{
    resolve("p3 resolved \n");
});

Promise.all([p1,p2,p3]) //resolves in sequence.
.then((messages)=>{
    console.log(messages);
})

Promise.race([p1,p2,p3]) //resolves first done first resolved.
.then((messages)=>{
    console.log(messages);
})

