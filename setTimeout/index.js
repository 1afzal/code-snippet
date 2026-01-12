let count = 0;
function greeting1(msg){
    console.log(msg);
}

function greeting2(msg){
    console.log(msg);
}

setTimeout(()=>{
    setInterval(()=>{
        count++;
        console.log(count);
    },1000)
    greeting1("Hey")
},5000)
clearTimeout()