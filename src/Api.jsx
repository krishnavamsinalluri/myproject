import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Api() {
    var [data,setData]=useState([])
    useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
        setData([...res.data])
    console.log(res)}).catch("error")
    },[])
  return (
    <div>
        {
            data.map((r)=>{
                <div>
                    <h1>{r.category}</h1>
                </div>
            })
        }
    </div>
  )
}

export default Api