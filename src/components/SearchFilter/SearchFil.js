import React, { useState } from 'react'

function SearchFil() {
    const [carditem,setCarditem]=useState("");

    const inputEvent=(event)=>{
        const data=event.target.value;
        console.log(data);
        setCarditem(data);
    } 
  return (
    <div>SearchFil

        <input type='text' onChange={inputEvent} />
        <SResult  cat={category}/>
    </div>
  )
}

export default SearchFil