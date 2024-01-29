import { useFormik } from "formik"
import { useAddProductMutation } from "../severs/product"

function Addproduct(){
     var [fu]  = useAddProductMutation()
       var prodctform= useFormik({
        initialValues:{
            "title":"",
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
            <input type="text" name="title" onChange={prodctform.handleChange} onBlur={prodctform.handleBlur}/>
            <input type="text" name="price" onChange={prodctform.handleChange} onBlur={prodctform.handleBlur}/>
            <input type="text" name="description" onChange={prodctform.handleChange} onBlur={prodctform.handleBlur}/>
            <input type="text" name="category" onChange={prodctform.handleChange} onBlur={prodctform.handleBlur}/>
            <input type="text" name="image" onChange={prodctform.handleChange} onBlur={prodctform.handleBlur}/>
        <button >add</button>
        </form>

        </div>

    )
}
export default Addproduct