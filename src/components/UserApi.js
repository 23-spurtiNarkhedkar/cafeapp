import React, { useEffect, useState } from 'react'

function UserApi() {
    
    let [data, setData] = useState(null)

    useEffect(()=>{
        fetch("http://localhost:8000/userapi")
        .then(response=>response.json())
        .then(data=>setData(data.name))
    })
  return (
    <div>userApi
        {setData}</div>
  )
}

export default UserApi
