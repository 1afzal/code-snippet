function first(callback) {
    console.log("Im first\n");
    callback();
}
function second() {
    console.log("Im second\n");
}
first(second);
function enterHouse(callback) {
    console.log("Entered the house\n");
    callback();
}
function leaveHouse() {
    console.log("Left the house\n");
}
enterHouse(leaveHouse);
export {};
//# sourceMappingURL=index.js.map