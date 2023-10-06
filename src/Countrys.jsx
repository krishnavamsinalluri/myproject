import React, { useEffect } from "react";
import axios from axios
function State(){

    return (
        <div>
            {
                useEffect(()=>{
                    axios.get("https://fakestoreapi.com/products").then((res)=>{
                        
                    })
                })
            }
        </div>
    )

}
export default State