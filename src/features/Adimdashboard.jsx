import React from 'react'
import { json } from 'react-router-dom'
 import Elurubus from './Elurubus'
import Rajahmundry from './Rajahmundry'
function Adimdashboard() {
    var {from,to}=JSON.parse(window.localStorage.getItem("tikecks"))[0]
    console.log(from,to)
  return (
    <div>
        <div>
            {
                from==="Eluru" && to==="Hyderbad" &&<Elurubus></Elurubus>
            }
            {
              from==="Rajahmundry" && to==="Visakapatanam" && <Rajahmundry></Rajahmundry>
            }
        </div>
   </div>
  )
}

export default Adimdashboard