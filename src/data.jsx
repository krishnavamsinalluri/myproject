import React, { useState } from "react";
import axios from "axios";
import bootstrap from  "bootstrap"
function Restdata(){

    var [contry,SetContry]=useState([])
    React.useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then(function(res){
            console.log(res.data)
            SetContry(...res.data)
        })
    },[])

    

    return (
        <div className="box">
        {
        contry.map((a)=>{
            return( 
                <div className="m-3 p-5">
                    <h5> Name:{a.name.common}</h5>
                    <img  style={{width:"200px"}}src={a.flags[1]}alt="" />
                    <h5> population:{a.population}</h5>
                </div>
            )
         })
         }
     </div>
    )

}
export default Restdata
