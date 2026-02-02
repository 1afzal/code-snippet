function f1(cb) {
    console.log("f1 here");
    cb();
}
function f2() {
    console.log("f2 here");
}
f1(f2);
export {};
//# sourceMappingURL=f.js.map