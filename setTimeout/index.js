let count = 0;

function incrementCount(){
    setInterval(()=>{
        count++;
        console.log(count);
    },500)
}

incrementCount()