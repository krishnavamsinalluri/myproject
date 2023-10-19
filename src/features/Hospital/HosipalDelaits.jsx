import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAddBedsMutation, useGetHospaitalDetailsByIdQuery, useLazyGetAllHospitalsQuery, useLazyGetHospaitalDetailsByIdQuery } from "../../servivces/hospApi";
import _ from "lodash";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from "../../firebase";
import { useEffect } from "react";
const provider = new GoogleAuthProvider();
function HospitalDetails(){
  var p = useParams();
   var[updateBeds]= useAddBedsMutation()
  var [getHospitalDetails]=useLazyGetHospaitalDetailsByIdQuery()
  var {isLoading,data}=useGetHospaitalDetailsByIdQuery(p.id);
  var [beds,setBeds]=useState(null)
  var [bedTypes,setBedTypes]=useState([])
  var [selectbed,setSelectedBed]=React.useState(-1)

     useEffect(()=>{
    if(data){
      var bedsByCategory= _.groupBy(data.beds,"bedType");
      console.log(bedsByCategory);
      setBeds(bedsByCategory)
        var temp=[]
        for(var k in bedsByCategory){
          temp.push(k)
        }
        setBedTypes([...temp])

      
    }
  },[data]);
  function occupyBed(bid){
        setSelectedBed(bid)
    console.clear()
    console.log(data)
     var tempBeds =data.beds;
     tempBeds = tempBeds.map((bed)=>{
      if(bed.bedId===bid){
        return{
          ...bed,bedStatus:"occupied"
        }
      }
      else{
        return bed;
      }

    })
    console.log( "tempbeds:",tempBeds)
    var bedsByCategory=_.groupBy(tempBeds,"bedType")
    setBeds(bedsByCategory);
    
  }
  function updateHospital(){
    signInWithPopup(auth,provider)
    .then((result)=>{

        const credential=GoogleAuthProvider.credentialFromResult(result)
        const token=credential.accessToken;
        const user=result.user
     console.clear()
     console.log(beds)
     console.log(user)
     console.log(token)
    // var temp = Object.values(beds).flat(1);
})
  }
    return (
        <div>
            <h1>HospitalDetails</h1>
            {
              isLoading  && ("please wait")
            }
            {
              !isLoading && (
                <div>
                  <h1>{data.hospitalName.toUpperCase()}</h1>
                  <ul>
                    {
                      bedTypes.map((t,i)=>{
                        return <li key={i}>{t}-{beds[t].lenght}
                        <br />
                        {
                          beds[t].map((bed)=>{
                            return (<>
                           { bed.bedStatus==="open" &&<i className="bi bi-clipboard m-2" onClick={()=>{occupyBed(bed.bedId)}}></i>}
                           {bed.bedStatus==="occuiped" && <i  class="bi bi-clipboard-fill h3 m-2" onClick={()=>{occupyBed(bed.bedId)}}></i>}

                            </>)
                          })
                        }
                        </li>
                      })
                    }
                  </ul>
                  <button onClick={()=>{updateHospital()}}>Bookit</button>
                  
                </div>
      
              )
            }
        </div>
        )

}
export default HospitalDetails