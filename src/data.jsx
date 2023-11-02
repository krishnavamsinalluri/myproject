import React, { useState } from "react";
import axios from "axios";
function Restdata(){

    var [contry,SetContry]=useState([])
    React.useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then(function(res){
            console.log(res.data)
            SetContry(...res.data)
        })
    },[])

    

    return(
        <div className="box">
            <div className="card">
            {
                contry.map((a)=>{

                    return (<div className="box">
                        
                        <h1>{a.name.common}</h1>

                    </div>)
                })
            }
            </div>
       </div>
    )

}
export default Restdata
