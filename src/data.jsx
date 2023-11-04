import React, { useState } from "react";
import axios from "axios";
function Restdata(){

    var [contry,SetContry]=useState([])
    React.useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then(function(res){
            console.log(res.data);
            SetContry(res.data)
        })
        
    },[]);
    console.log(contry)
        function ab(){
            var se=document.getElementById("dd").value;
            var u=contry.filter((c)=>{
                return (c.name.common.startsWith(se).toLowerCase())
            })
            SetContry(u)
        }
    return (
        <div className="card w-90">
            <div className="box">
                <input type="text" placeholder="search" id="dd" onChange={ab}/>

            </div>
            <div className="d-flex flex-wrap  junstify-content">
            {
         contry.map( function(a){
            return <div className="m-3 p-3">
                <h1>{a.name.common}</h1>
            <img width="200px"  src={a.flags[1]}></img>
            </div>
        })
        }
            </div>

        


     </div>
    )
}
export default Restdata;
