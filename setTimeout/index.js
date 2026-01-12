function eat(){
    console.log("eat");
}

function poop(){
    console.log("poop");
}

setTimeout(()=>{
    eat();
        setTimeout(()=>{
            poop();
        },1000)
},1000)