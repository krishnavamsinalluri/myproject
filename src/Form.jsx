import React from 'react'
import { UseSelector, useDispatch } from 'react-redux'

function Form() {
 var dispatch= useDispatch()
  return (
    <div>
      <div className='container'>
        <form action="">
        <div className='row'>
          <div className='col-4'>     
                 <input type="text" placeholder='Enter amount ' />&nbsp;
                 <button onClick={()=>{dispatch({type:"deposit",payload:2000})}}>deposit</button>
                 <button onClick={()=>{dispatch({type:"withdraw",payload:2000})}}>withdraw</button>


        </div>
        </div>

        </form>
      </div>
    </div>

  )
}

export default Form