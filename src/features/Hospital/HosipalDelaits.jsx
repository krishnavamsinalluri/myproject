import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAddBedsMutation, useGetHospaitalDetailsByIdQuery, useLazyGetAllHospitalsQuery, useLazyGetHospaitalDetailsByIdQuery } from "../../servivces/hospApi";
import _ from "lodash"
import { useEffect } from "react";
import { object } from "yup";
function HospitalDetails(){
  var p = useParams();
   var[updateBeds]= useAddBedsMutation()
  var [getHospitalDetails]=useLazyGetHospaitalDetailsByIdQuery()
  var {isLoading,data}=useGetHospaitalDetailsByIdQuery(p.id);
  var [beds,setBeds]=useState(null)
  var [bedTypes,setBedTypes]=useState([])

  var bedsByCategory = _.groupBy(data.beds,"bedtype");
  console.log(data)
  console.log(p)
  useEffect(()=>{
    if(data){
      var bedsByCategory= _.groupBy(data.beds,"bedtype");
      console.log(bedsByCategory)
      setBeds(bedsByCategory)
        var temp=[]
        for(var k in bedsByCategory){
          temp.push(k)
        }
        setBedTypes([...temp])

      
    }
  },[data])
  useEffect(()=>{
    if(data){
      var bedsByCategory= _.groupBy(data.beds,"bedtype");
      console.log(bedsByCategory)
      setBeds(bedsByCategory)
   }
  },[beds])
    useEffect(()=>{
 
      console.log("bedTypes:",beds)

   
    },[beds])
    
  function occupyBed(bid){
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
    var bedsByCategory=_.groupBy(tempBeds,"bedtype")
    setBeds(bedsByCategory)

    function updateHospital(){
      console.clear()
      var temp = Object.values(beds).flat(1)
      data= {...data,beds:[...temp]}
      updateBeds(data).then(()=>{alert("update succes")
      getHospitalDetails(p.id)
    })
      console.log(temp)


    }
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
                      bedTypes.map((t)=>{
                        return <li>{t}-{beds[t].lenght}
                        <br />
                        {
                          beds[t].map((bed)=>{
                            return (<>
                           { bed.bedStatus==="open" &&<i className="bi bi-clipboard m-2" onClick={()=>{occupyBed(bed.bedId)}}></i>}
                           {bed.bedStatus==="occuiped" && <i className="bi bi-clipboard-fill m-2" onClick={()=>{occupyBed(bed.bedId)}}></i>}

                            </>)
                          })
                        }
                        </li>
                      })
                    }
                  </ul>
                  <button onClick={()=>{updateHospital()}}>BookIT</button>
                  
                </div>
      
              )
            }
        </div>
        )

}
export default HospitalDetails