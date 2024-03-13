import React from 'react'
import { useSelector } from 'react-redux'

function Accontas() {
  var data=  useSelector(
        (state)=>{
            return state
        }
    )
  return (
    <div>
    <div className='container'>
        <table  className='table table-bordered w-50'>
            <thead>
                <tr>       <th>
                    balance
                </th>
                <th>user name</th>
                <th>Mobile number</th></tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{data.balance}</td>
                        <td>{data.username}</td>
                        <td>{data.mobile}</td>
                    </tr>
                </tbody>


        </table>
    </div>
    </div>
  )
}

export default Accontas