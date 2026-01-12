function search(query){
    console.log(`Searching for: ${query}`)
}


function debounce(func, delay){
    let timeout; 
    return function(...args){
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            func.apply(this, args);
        },delay)
    }
}
const deSearch = debounce(search, 100);

deSearch(`Who is `);
deSearch(`Who is El `);
deSearch(`Who is Elon`);
deSearch(`Who is Elon Mu`);
deSearch(`Who is Elon Musk? `);
