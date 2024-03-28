import React, { useState } from 'react'

function Incremint() {
  var [count,setCount]=useState(0)
  return (
    <div className='box'>

        <button onClick={()=>{setCount(count+1)}}>like</button>
        <b>{count}</b>
        <button onClick={()=>{setCount(count-1)}}>dislike</button>
    </div>
  )
}
export default Incremint