let count = 0;

function incrementCount(){
    setInterval(()=>{
        count++;
        console.log(count);
    },5000)
}

incrementCount()