import React, { useEffect, useState } from "react";
import axios from "axios"
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
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
            <div className="d-flex flex-wrap justify-content ">
            {
                data.map((a)=>{
                return(
                    <div className="  card m-3 p-5">
                 <h4>{a.category}</h4>
                 <h6>{a.price}</h6>
                    <img style={{width:'100px'}} src={a.image} alt="" />

                    </div>

                )
            

                })
           }

            </div>
        </div>
    )

}
export default State