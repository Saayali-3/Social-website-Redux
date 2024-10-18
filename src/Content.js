import React, { useState } from "react";

function Content (){

    const handleClick = (name) =>{
        console.info("clicked",name)
    }

// const[name,setName] = useState({firstname:"sneka", lastname:"k"})
// setName(name.firstname + "helo")

// const[function,setFunction] = useState(()=>newFunction())

    const [count,setCount] = useState(0);

    const handleIncrement = () =>{
       setCount(count+1)
    }

    const handleDecrement= () =>{
        setCount(count-1)
    }

   return (
    <>
        <h1>To do list</h1>
        <button onClick={()=>handleClick("sneka")}> Submit </button>
        <button onClick={()=>handleIncrement()}>+</button>
        <span>{count}</span>
        <button onClick={()=>handleDecrement()}>-</button>
    </>
   )
}

export default Content;

