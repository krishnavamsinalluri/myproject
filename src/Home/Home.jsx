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
        <ul className="d-flex flex-warp">
        {
            !isLoading && (
                data.map((hospital)=>{
                    return (<li className="w-25 border border-2" style={{listStyle:"none"}}>
                        <h3 className="text-center">{hospital.hospitalName.toUpperCase()}</h3>
                        <img src={hospital.image} width="100%" alt="" />
                    <br />
                    <li>
                        <b> Total Beds:{hospital.beds.length}</b></li>
                        <br />
                        <Link  to={`details/${hospital.id}`}>Details </Link>
                    </li>
                    )
                })
            )
        }
       
        </ul>
    </div>
    )
}
export default Home