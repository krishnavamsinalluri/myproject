import React from "react";
import { , useGetAllHospitalsQuery } from "../servivces/hospApi";
function Addbed(){
    var { isloading:isHospitalsloading,data:hospital}=useGetAllHospitalsQuery()
return(
    <div className="border border-2 border-danger m-2">
        <h1>Addbed</h1>
        {
            isHospitalsloading && (<b>...wait</b>)
        }
        {
            !isHospitalsloading && (
                <select name="" id=""></select>
            )
        }
    </div>
)
}
export default Addbed