import React from 'react'
import { connect } from 'react-redux'
function Counter(props) {
    console.log(props)
  return (
    <div>
        
      <h1>Counter:{props.c.count}</h1>  
      <button onClick={()=>{props.dispatch({type:"INC"})}}>incre</button>
      <button onClick={()=>{props.dispatch({type:"DEC"})}}>dec</button>

        </div>
  )
}

export default  connect(function (store){return store})(Counter)