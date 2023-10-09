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
            function abc(){
                data.sort((a,b)=>{
                var car1=a.price
                var car2=b.price
                if(car1<car2){
                    return -1
                }
                if(car1>car2){
                    return 1
                }
                return 0
                })
            }
                function high(){}

    return (
        <div>
           <div>
            <div className="box">
            <i onClick={abc}>price low to high</i>
            <i onClick={high}>price high to low</i>



            </div>
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
        </div>

        )

}
export default State