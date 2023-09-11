import axios from "axios";
import React, { useEffect } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
function Counties(){

    var[country,setCountry]=React.useState([])
    useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then(function(res){
            console.log(res.data)
            setCountry([...res.data])
        })

    },[])
    function as(){
        country.sort(function(a,b){
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
        setCountry([...country])

    }
    function de(){
        country.sort(function(a,b){
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
        setCountry([...country])

    }
    function se(){
        var inpu=document.getElementById('in').value
       var s= country.filter((c)=>{
            return(c.name.common.startsWith(inpu))
        })
        console.log(s)
        setCountry([...country])
    }


    

    return(
        <div className="card w-50">     
             <div>  
             <div className="box">
                <b>Sort by population:</b>
                <i onClick={as}>Assinding order</i>   
                <i onClick={de}> Dessending order</i> 
                &nbsp;&nbsp;&nbsp;&nbsp;
                       <input type="text"   placeholder="search" id="in"  onKeyUp={se}/> 
                       <i class="bi bi-search"></i>

              </div>
 
            <div className="d-flex flex-wrap justify-content">
                {
                country.map((a)=>{
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
         </div>
         </div>
  

    )

}
export  default Counties