function f1(cb:any){
    console.log("f1");
    cb()

}

function f2(){
    console.log("f2")

}
f1(f2);
