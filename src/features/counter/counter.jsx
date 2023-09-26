import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deceriment, inceriment ,reset} from './counterSlice'

export function Counter() {
  const {counter}= useSelector((state) => { return state.c})
  console.log(counter)
  const dispatch = useDispatch()
  return (
    <div>
        <h1>counter:{counter}</h1>
        <button onClick={()=>dispatch(inceriment())}>inceriment</button>
        <button onClick={()=>dispatch(deceriment())}>deceriment</button>
        <button onClick={()=>dispatch(reset())}>reset</button>


    </div>
  )
}
export default Counter
