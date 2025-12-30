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
function leaveHouse(callback) {
    console.log("Left the house\n");
    callback();
}
enterHouse(leaveHouse(first));
export {};
//# sourceMappingURL=index.js.map