import React from 'react'
import { useGetElurubusQuery } from '../servers/tikecks'
import { useParams } from 'react-router-dom'

function Elurubus() {
 var {bid} =   useParams()
var {data}=useGetElurubusQuery(bid)
  return (
    <div>
        <div>
            <h1>vamsi</h1>
 </div>
    </div>
  )
}

export default Elurubus