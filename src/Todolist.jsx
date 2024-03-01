import React, { useState } from 'react'

function Todolist() {
    var[to,setTo]=useState([])
    function abc(){
        var inpu=document.getElementById("dd").value
        setTo([...to,inpu])
    }
    function ab(i){
        var tem=to
       tem.splice(i,1)
        setTo([...to])
    }
  return (
    <div>
        <input type="text" id='dd' />
        <button onClick={abc}>add</button>
            {
                to.map((a,i)=>{
                    return(
                        <li>{a}
                        <button onClick={(i)=>{ab(i)}}>deleete</button>
                        </li>
                    )
                })
            }
    </div>
  )
}

export default Todolist