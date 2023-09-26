import { useSelector, useDispatch } from 'react-redux'
import { addtodos,deletetodo } from './todolistSlice'
import { useState } from 'react'
function Todo(){
    var [nt,setNt]=useState()
    var {todo}=useSelector((state)=>{return state.t})
    var dispatch=useDispatch()


    return(
        <div className=' box'>
            <input type="text" onChange={(e)=>{setNt(e.target.value)}} />
            <button onClick={()=>{dispatch(addtodos(nt))}}>addtodo</button>
            {
                todo.map((a,i)=>{
                    return <li>{a}
                    <button onClick={()=>{dispatch(deletetodo(i))}}>delet</button>
                    </li>
                })
            }

        </div>
    )
}
export default Todo
