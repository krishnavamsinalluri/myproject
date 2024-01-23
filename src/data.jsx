import React, { useState } from "react";
import axios from "axios";
function Restdata(){

    var [contry,SetContry]=useState([])
    React.useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then(function(res){
            console.log(res.data);
            SetContry([...res.data])
        })
        
    },[]);
    console.log(contry)
        function ab(){
            var se=document.getElementById("dd").value;
            var u=contry.filter((c)=>{
                return (c.name.common.toLowerCase().startsWith(se))
            })
            SetContry([...u])
        }
        function as(){
            contry.sort((a,b)=>{
                var car1=a.population
                var car2=b.population
                if(car1<car2){
                    return -1
                }
                if(car1>car2){
                    return 1
                }
                return 0
            })
            SetContry([...contry])

        }
            function de(){
                contry.sort((a,b)=>{
                    var car1=a.population
                    var car2=b.population
                    if(car1<car2){
                        return 1
                    }
                    if(car1>car2){
                        return -1
                    }
                    return 0
                })
                SetContry([...contry])

                }
             return (
        <div className="card w-90">
            <div className="box">
                <button onClick={as}>assending order</button>
                <button onClick={de}>desending order</button>
                <input type="text" placeholder="search" id="dd" onChange={ab}/>

            </div>
            <div className="d-flex flex-wrap  junstify-content">
            {
         contry.map( function(a){
            return <div className="m-3 p-3">
             <img width="200px"  src={a.flags[1]} alt=""></img>
                <h1>{a.name.common}</h1>
            <b>{a.population}</b>
            </div>
        })
        }
            </div>

        


     </div>
    )
}
export default Restdata;
