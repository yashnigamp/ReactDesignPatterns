import React, { useState } from "react";

const Wrapper = ({render}) => {
    const [count,setCount] = useState(0);
    const incCount = () =>{
        setCount(prevCount => prevCount+1)
    } 
    return(
        <>
        {render(count,incCount)}
        </>
    )
}

export default Wrapper;