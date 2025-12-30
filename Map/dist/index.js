async function fecthAndMap() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos'); // array
    const data = await response.json();
    const title = data.map((d) => d.title);
    const isCompleted = data.map((d) => d.completed);
    console.log(title, isCompleted);
}
const students = new Map();
students.set("john", { name: "john", age: 22 });
students.set("tina", { name: "tina", age: 21 });
students.set("Doe", { name: "Doe", age: 23 });
const john = students.get("john");
console.log(john);
const size = students.size;
console.log(size);
// students.delete("john");
// students.clear(); //clears or deletes all 
students.has("tina"); //returns a boolean value (true or false)
students.forEach((i) => {
    console.log(i);
});
const arr = [10, 20, 30, 40];
const square = arr.map((m) => m * 2);
console.log(square);
export {};
//# sourceMappingURL=index.js.map