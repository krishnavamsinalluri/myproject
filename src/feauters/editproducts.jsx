import { useFormik } from "formik"
import { useNavigate, useParams } from "react-router-dom"
import {  useGetProductsByIdQuery, useUpdataProductMutation,  } from "../severs/product"
import React,{useEffect} from "react"

function Edit(){
    var {pid}= useParams()
   /// console.log(pid)
    var {data}=useGetProductsByIdQuery(pid)
  //  console.log(data)
    var [fnp] = useUpdataProductMutation()
     var navi= useNavigate()
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
          function home(){
            navi("/dashbord")
          }
   return  (
        <div>
          <div>
          <div>
            <nav class="navbar bg-primary">
                <div class="container-fluid">
                    <h3 class="navbar-brand mb-0 h1 bi bi-house-fill" onClick={()=>{home()}}>Home</h3>
                </div>
                </nav>
            </div>
          </div>
         <form onSubmit={prodctForm.handleSubmit} style={{textAlign:"center"}} className="editp">
              <h2>Updata A Product</h2>
              Title :<br></br>
            <input type="text" placeholder="Title"  value={prodctForm.values?.title} name="title" onChange={prodctForm.handleChange} onBlur={prodctForm.handleBlur}/> <br />
            Price :<br/>
            <input type="text"placeholder="Price" value={prodctForm.values?.price}  name="price" onChange={prodctForm.handleChange} onBlur={prodctForm.handleBlur}/><br />
            Description :<br></br>
            <input type="text"placeholder="Description" value={prodctForm.values?.description} name="description" onChange={prodctForm.handleChange} onBlur={prodctForm.handleBlur}/><br />
            Category :<br></br>
            <input type="text"placeholder="Category"  value={prodctForm.values?.category} name="category" onChange={prodctForm.handleChange} onBlur={prodctForm.handleBlur}/><br />
            Image :<br></br>
            <input type="text" placeholder="Image" value={prodctForm.values?.image} name="image" onChange={prodctForm.handleChange} onBlur={prodctForm.handleBlur}/><br /> <br />
        <button className="btn btn-success" >Update product</button>
        </form>

        </div>
       )
 }
 export default Edit