import { useFormik } from "formik"
import { useParams } from "react-router-dom"
import {  useGetProductsByIdQuery, useUpdataProductMutation,  } from "../severs/product"
import React,{useEffect} from "react"

function Edit(){
    var {pid}= useParams()
   /// console.log(pid)
    var {data}=useGetProductsByIdQuery(pid)
  //  console.log(data)
    var [fnp] = useUpdataProductMutation()
    var prodctForm= useFormik({
      initialValues: { title: "", price: "", description: "", category: "", image: "" },
        onSubmit:(values)=>{ 
            fnp(values).then((res)=>{
                alert("update...")
                console.log(res)
            })
        }
        })
        useEffect(() => {
            if (data) {
              prodctForm.setValues(data)
              //console.log(data)
            }
          }, [data]);
        
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