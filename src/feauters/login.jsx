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
                window.localStorage.setItem("users",JSON.stringify(res.data))
                if(res.data.length===0){
                    alert("cheeck details ")
                }
                else{
                    navi('/dashbord')
                }
            })
                  
        }
        })
        return(
            <div className="card" >
                <form onSubmit={loginForm.handleSubmit} className="main">
                <img style={{width:"200px"}} src="" alt="" /><br></br>
                        <img style={{width:"200px"}} src="" alt="" /><br></br>

                
                     <span>   <b style={{fontSize:"30px"}} className="text-dark">Welcome...</b></span> <span style={{fontSize:"30px"}} class="bi  bi-emoji-smile-upside-down"></span><span style={{fontSize:"30px"}} class="bi bi-emoji-smile"></span><br />
                     <img style={{width:"200px"}} src="" alt="" /><br></br>
                        <h1 class="bi bi-person-circle"></h1>
                <b className="bi bi-person-fill">:</b>    <input type="text"  placeholder="Username" name="username" onChange={loginForm.handleChange} /><br /><br />
                <b class="bi bi-lock-fill">:</b>    <input type="text" placeholder="password" name="Password" onChange={loginForm.handleChange} /><br /><br />
                  
                    <button className="btn btn-outline-dark">Save</button><br />
                </form>
  
                            

                
          </div>
        )
 
}

export default Login
