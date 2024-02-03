import { useFormik } from "formik"
import { useAddProductMutation } from "../severs/product"
import {  useNavigate } from "react-router-dom"

function Addproduct(){
     var [fu]  = useAddProductMutation()
        var navi=useNavigate()
       var prodctForm= useFormik({
        initialValues:{
            "title":"",
           " price":0,
           "description":"",
           "category":"",
           "image":""
           

        },
        onSubmit:(values)=>{ 
            console.log(values)
            fu(values).then(()=>{
                alert("ADDED...")

            })
        }
        })
        function home(){
            navi("/dashbord")

        }
    return(
        <div>
            <div>
            <nav class="navbar bg-primary">
                <div class="container-fluid">
                    <h3 class="navbar-brand mb-0 h1 bi bi-house-fill" onClick={()=>{home()}}>Home</h3>
                </div>
                </nav>
            </div>
       <div className="card">
        <form onSubmit={prodctForm.handleSubmit} style={{textAlign:"center"}} className="addp">
                <h1>Add A New Product</h1>
            Title :<br></br>
            <input type="text" placeholder="Title" value={prodctForm.values.title} name="title" onChange={prodctForm.handleChange} onBlur={prodctForm.handleBlur}/> <br />
            Price :<br></br>
            <input type="text"placeholder="Price" value={prodctForm.values.price} name="price" onChange={prodctForm.handleChange} onBlur={prodctForm.handleBlur}/><br />
            Description :<br></br>
            <input type="text"placeholder="Description" value={prodctForm.values.description} name="description" onChange={prodctForm.handleChange} onBlur={prodctForm.handleBlur}/><br />
            Category :<br></br>
            <input type="text"placeholder="Category" value={prodctForm.values.category} name="category" onChange={prodctForm.handleChange} onBlur={prodctForm.handleBlur}/><br />
            Image :<br></br>
            <input type="text" placeholder="Image"value={prodctForm.values.image} name="image" onChange={prodctForm.handleChange} onBlur={prodctForm.handleBlur}/><br /> <br />
        <button className="btn btn-outline-secondary"  >Add Product</button>
        </form>

        </div>
        </div>
    )
}
export default Addproduct