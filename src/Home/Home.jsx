import React from "react";
import { useGetAllHospitalsQuery } from "../servivces/hospApi";
import { Link } from "react-router-dom";
function Home(){
   var {isLoading,data}= useGetAllHospitalsQuery()
    return(
        <div>
            <h1>HOME</h1>
        {
            isLoading &&   (<b>Please wait...</b>)
        }
        <ul className="d-flex flex-warp p-0">
        {
            !isLoading && (
                data.map((hospital)=>{
                    return (<li className="w-25  p-2" style={{listStyle:"none"}}>
                        <div className="border border-2 p-2 m-2">
                        <h3 className="text-center">{hospital.hospitalName.toUpperCase()}</h3>
                        <img src={hospital.image} width="100%" height="150px" alt="" />
                    <br />
                    <li>
                        <b> Total Beds:{hospital.beds.length}</b></li>
                        <br />
                        <Link  to={`details/${hospital.id}`}>Details </Link>
                        </div>
                    </li>)
                    
                })
            )
        }
       
        </ul>
    </div>
    )
}
export default Home;