import React, { useState } from 'react'
import { connect } from 'react-redux'
function Todolist(props) {
    console.log(props)
    var [to,setTo]=useState([])
  return (
    <div>
        <input type="text" onChange={(e)=>{setTo(e.target.value)}} />
        <button onClick={()=>{props.dispatch({type:"addtodo",payload:to})}}>add</button>
        {
            props.t.todolist.map((a)=>{
                return (
                    <li>{a}</li>
                )
            })
        }
    </div>
  )
}

export default connect(store=>store) (Todolist)