import React from 'react'
import { useGetbookingQuery } from '../servers/book'

function Bookingstatus() {
    var {data}=useGetbookingQuery()
    console.log(data)
  return (
    <div>
        <div>
            <h1>Payment Detailes</h1>
            <img src="https://img.freepik.com/free-vector/loading-circles-blue-gradient_78370-2646.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710806400&semt=ais" alt="" />
      </div>
    </div>
  )
}

export default Bookingstatus