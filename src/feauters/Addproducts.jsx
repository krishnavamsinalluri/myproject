import { useFormik } from "formik"
import { useAddProductMutation } from "../severs/product"

function Addproduct(){
     var [fu]  = useAddProductMutation()
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
    return(
        <div>

        <form onSubmit={prodctForm.handleSubmit}>
            <input type="text" placeholder="title" value={prodctForm.values.title} name="title" onChange={prodctForm.handleChange} onBlur={prodctForm.handleBlur}/> <br />
            <input type="text"placeholder="price"  name="price" onChange={prodctForm.handleChange} onBlur={prodctForm.handleBlur}/><br />
            <input type="text"placeholder="description" name="description" onChange={prodctForm.handleChange} onBlur={prodctForm.handleBlur}/><br />
            <input type="text"placeholder="category" name="category" onChange={prodctForm.handleChange} onBlur={prodctForm.handleBlur}/><br />
            <input type="text" placeholder="image"name="image" onChange={prodctForm.handleChange} onBlur={prodctForm.handleBlur}/><br /> <br />
        <button className="btn btn-secondary" >Add Products</button>
        </form>

        </div>

    )
}
export default Addproduct