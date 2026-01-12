function search(query){
    console.log(`Searching for: ${query}`)
}

function debounce(func,delay){
    let timeout;
    return function(...args){
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            func.apply(this, args);
        }, delay)
    }
}

const debounceSearch = debounce(search, 500);

debounceSearch("Hey")
debounceSearch("Hey who")
debounceSearch("Hey who are")
debounceSearch("Hey who are you ")