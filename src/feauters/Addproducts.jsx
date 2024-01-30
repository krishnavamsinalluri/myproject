import { useFormik } from "formik"
import { useAddProductMutation } from "../severs/product"

function Addproduct(){
     var [fu]  = useAddProductMutation()
       var prodctform= useFormik({
        initialValues:{
            "title":"sdh",
           " price":0,
           "description":"",
           "category":"",
           "image":""

        },
        onSubmit:(values)=>{ 
            console.log(values)
            fu(values)
        }

        })
    return(
        <div>
    <h1>add</h1>
        <form onSubmit={prodctform.handleSubmit}>
            <input type="text" placeholder="title" value={prodctform.values.title} name="title" onChange={prodctform.handleChange} onBlur={prodctform.handleBlur}/> <br />
            <input type="text"placeholder="price"  name="price" onChange={prodctform.handleChange} onBlur={prodctform.handleBlur}/><br />
            <input type="text"placeholder="description" name="description" onChange={prodctform.handleChange} onBlur={prodctform.handleBlur}/><br />
            <input type="text"placeholder="category" name="category" onChange={prodctform.handleChange} onBlur={prodctform.handleBlur}/><br />
            <input type="text" placeholder="image"name="image" onChange={prodctform.handleChange} onBlur={prodctform.handleBlur}/><br /> <br />
        <button className="btn btn-secondary" >Add Products</button>
        </form>

        </div>

    )
}
export default Addproduct