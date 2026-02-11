import React from "react";
import { useState } from "react";

function useToogle(initial = false){
    const [value, setValue] = useState(initial)

    function toggle(){
        setValue(prev => !prev);
    }
    return [value, toggle]
}
export default useToogle;