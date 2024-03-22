import React from 'react'
 import Elurubus from './Elurubus'
import Rajahmundry from './Rajahmundry'
import Hyderabadbus from './Hyderabadbus'
function Adimdashboard() {
    var {from,to}=JSON.parse(window.localStorage.getItem("tikecks"))[0]
    console.log(from,to)
  return (
    <div>
        <div>
            {
                from==="Eluru" && to==="Hyderabad" &&<Elurubus></Elurubus>
            }
            {
              from==="Rajahmundry" && to==="Visakapatanam" && <Rajahmundry></Rajahmundry>
            }
            {
              from==="Hyderabad" && to==="Eluru" &&<Hyderabadbus></Hyderabadbus>
            }
        </div>
   </div>
  )
}

export default Adimdashboard