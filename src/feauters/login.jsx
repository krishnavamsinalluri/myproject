import { useFormik } from "formik"
import { useLazyGetUsersByNameQuery } from "../severs/user"
import { useNavigate } from "react-router-dom"

function Login(){
  var [lofn] = useLazyGetUsersByNameQuery()
   var navi= useNavigate()
    var loginForm= useFormik({
        initialValues:{
            "username":"",
           "password":"",

        },
        onSubmit:(values)=>{ 
            lofn(values).then((res)=>{
                if(res.data.length===0){
                    alert("cheeck details ")
                }
                else{
                    navi('/products')
                }
            })
                  
        }
        })
        return(
            <div >
                <form onSubmit={loginForm.handleSubmit} className="main">
                        <h1>Welcome..</h1>
                 Username:   <input type="text" placeholder="username" name="username" onChange={loginForm.handleChange} /><br /><br />
                  Password:  <input type="text" placeholder="password" name="password" onChange={loginForm.handleChange} /><br />
                  <br />
                    <button className="btn btn-primary">Save</button>
                </form>
  
                            

                
          </div>
        )
 
}

export default Login
