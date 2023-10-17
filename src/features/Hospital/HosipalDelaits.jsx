import React from "react";
import { useParams } from "react-router-dom";
function HospitalDetails(){
  var p = useParams();
  console.log(p)
    return (
        <div>
            <h1>HospitalDetails</h1>
        </div>
        )

}
export default HospitalDetails