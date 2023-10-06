import React, { useEffect, useState } from "react";
import axios from "axios"
import boostrap
function State(){

    var [data,setData]=React.useState([])
     React.useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            console.log(res.data)
            setData([...res.data])
        })
    },[])

    return (
        <div>
            {
                data.map((a)=>{
                return(
                    <div className="">
                 <h4>{a.category}</h4>
                 <h6>{a.price}</h6>

                    </div>

                )
            

                })
           }
        </div>
    )

}
export default State