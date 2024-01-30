import { useFormik } from "formik"
import { useParams } from "react-router-dom"
import { useGetAllProductsByIdQuery, useUpdateProductMutation } from "../severs/product"
import React,{useEffect} from "react"

function Edit(){
    var {pid}= useParams()
    var {data}=useGetAllProductsByIdQuery(pid)
    var [fnp] = useUpdateProductMutation()
    var prodctform= useFormik({
        initialValues: {title:""},
        onSubmit:(values)=>{ 
            console.log(values)
            fnp(values).then(()=>{
                alert("update...")
            })
        }
        })
        useEffect(()=>{
            prodctform.setValues(data)
        },[data])


    return  (
        <div>
              {JSON.stringify(prodctform)}

         <form onSubmit={prodctform.handleSubmit}>
            <input type="text" placeholder="title"  value={prodctform.values?.title} name="title" onChange={prodctform.handleChange} onBlur={prodctform.handleBlur}/> <br />
            <input type="text"placeholder="price" value={prodctform.values?.price}  name="price" onChange={prodctform.handleChange} onBlur={prodctform.handleBlur}/><br />
            <input type="text"placeholder="description" value={prodctform.values?.description} name="description" onChange={prodctform.handleChange} onBlur={prodctform.handleBlur}/><br />
            <input type="text"placeholder="category"  value={prodctform.values?.category} name="category" onChange={prodctform.handleChange} onBlur={prodctform.handleBlur}/><br />
            <input type="text" placeholder="image" value={prodctform.values?.image} name="image" onChange={prodctform.handleChange} onBlur={prodctform.handleBlur}/><br /> <br />
        <button className="btn btn-secondary" >Update product</button>
        </form>

        </div>
       )
 }
 export default Edit