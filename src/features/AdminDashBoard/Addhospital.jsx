import React, { useState } from "react";
import { Formik } from "formik";
import { bedTypes } from "../../Constant";
import { useAddHospitalMutation } from "../../servivces/hospApi";
function Addhostipal(){
    var[newbed,setNewbed]= useState({
        bed:"",
        price:0
    })
    
    var [addBedtypes,setAddBedtypes]=useState([])
    var [addHospital]=useAddHospitalMutation()
    function addBedtype(){
        setAddBedtypes([...addBedtypes,newbed])
    }
    return(
        
        <div className="border border-2 border-info m-2">
            <h2>Add Hospital</h2>
            <div class="modal" tabindex="-1">
      <div class="modal-dialog">
     <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            <Formik
         initialValues={{ hospitalName: '',
             image: '' ,
            area:"",
            reviews:[],
            bedTypes:[],
            beds:[]


        
        }}
      onSubmit={(values)=>{
        values.bedTypes=[...addBedtypes]
        addHospital(values).then((res)=>{
            console.log(res)

        })

      }}
      >
            {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="hospitalName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.hospitalName}
             placeholder="Enter Hospital Name"
           />
           <br />
           <input
             type="text"
             name="image"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
             placeholder="Enter Hospital image"

           />
            <br />
              <input
             type="text"
             name="area"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.area}
             placeholder="Enter Hospital Address"

           />
           <br />
            <ul>
              {
                addBedtypes.length>0 && (<u>selected bedTypes</u>)
              }
              {
                addBedtypes.length>0 && addBedtypes.map((a)=>{
                  return <li>
                    <i>{a.bedTypes}</i> &nbsp;
                    <b>{a.price}</b>&nbsp;
                  </li>
                })
              }
            </ul>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add bedTypes
            </button>


            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Add Bed Type with Price</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label htmlFor="">Select Bed Type:</label>
                    <select onChange={(e)=>{setNewbed({...newbed,bedTypes:e.target.value})}}>
                        <option value={null} disabled selected>Please Selected</option>
                        {
                            bedTypes.map((bed)=>{
                                return <option value={bed}>{bed}</option>
                            })
                        }
                    </select>
                    <br />
                    <label htmlFor="">Select Bed Price:</label>
                    <input type="text" placeholder="Enter A Price"  onChange={(e)=>{setNewbed({...newbed,price:e.target.value})}}/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onClick={()=>{addBedtype()}}>Add Bed Type</button>
                </div>
                </div>
            </div>
            </div>
 
          <br />
           <button type="submit">
             Submit
           </button>
        
        </form>
       )}
     </Formik>
   
        </div>
        
    )
}
export default Addhostipal