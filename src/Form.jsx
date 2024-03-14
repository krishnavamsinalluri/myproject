import { useState } from 'react'
import React from 'react'
import {  useDispatch,  } from 'react-redux'

function Form() {
 var dispatch= useDispatch()
 const [amount,setAmount ] = useState("")
  return (
    <div>
      <div className='container'>
        <form action="">
        <div className='row'>
          <div className='col-4'>     
                 <input type="text" placeholder='Enter amount ' value={amount}  onChange={(e)=>{ var data=e.target.value;setAmount(data)}}/>&nbsp;

        </div>
        <button onClick={()=>{dispatch({type:"deposit",payload:amount})}}>deposit</button>
             <button onClick={()=>{dispatch({type:"withdraw",payload:amount})}}>withdraw</button>


        </div>

        </form>
      </div>
    </div>

  )
}

export default Form