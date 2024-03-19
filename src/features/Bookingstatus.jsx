import React from 'react'
import { useGetbookingQuery } from '../servers/book'

function Bookingstatus() {
    var {data}=useGetbookingQuery()
  return (
    <div>
        <div>
            <h1>Payment Detailes</h1>
            <select name="" id="">
                <option>please select</option>
                <option value=""><a href="https://aa.phonepe.com/client/">phone</a></option>
            </select>
       </div>
    </div>
  )
}

export default Bookingstatus