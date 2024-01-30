import { useFormik } from "formik"
import { useParams } from "react-router-dom"
import {  useGetProductsByIdQuery, useUpdateProductMutation } from "../severs/product"
import React,{useEffect} from "react"

function Edit(){
    var {pid}= useParams()
    console.log(pid)
    var {data}=useGetProductsByIdQuery(pid)
    console.log(data)
    var [fnp] = useUpdateProductMutation()
    var prodctForm= useFormik({
        initialValues:data,
        onSubmit:(values)=>{ 
            console.log("val"+values)
            fnp(values).then(()=>{
                alert("update...")
            })
        }
        })
        useEffect(() => {
            if (data) {
              prodctForm.setValues(data);
              console.log(data)
            }
          }, [data,prodctForm]);
        
   return  (
        <div>
         <form onSubmit={prodctForm.handleSubmit}>
            <input type="text" placeholder="title"  value={prodctForm.values?.title} name="title" onChange={prodctForm.handleChange} onBlur={prodctForm.handleBlur}/> <br />
            <input type="text"placeholder="price" value={prodctForm.values?.price}  name="price" onChange={prodctForm.handleChange} onBlur={prodctForm.handleBlur}/><br />
            <input type="text"placeholder="description" value={prodctForm.values?.description} name="description" onChange={prodctForm.handleChange} onBlur={prodctForm.handleBlur}/><br />
            <input type="text"placeholder="category"  value={prodctForm.values?.category} name="category" onChange={prodctForm.handleChange} onBlur={prodctForm.handleBlur}/><br />
            <input type="text" placeholder="image" value={prodctForm.values?.image} name="image" onChange={prodctForm.handleChange} onBlur={prodctForm.handleBlur}/><br /> <br />
        <button className="btn btn-secondary" >Update product</button>
        </form>

        </div>
       )
 }
 export default Edit