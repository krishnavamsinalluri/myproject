import { useFormik } from "formik"
import { useAdduserMutation } from "../severs/user"
import { useNavigate } from "react-router-dom"

function Regiration(){
 var[fn] =  useAdduserMutation()
  var navi=  useNavigate()
 var newusers =   useFormik({
        initialValues:{
            "username":"","password":"","role":""
        },

    onSubmit:(values)=>{
        fn(values)
        console.log(values)
        alert("Your are Register")

    }

    })
    function Login(){
        navi("/login")
    }
        
     return(
        <div>
            <form onSubmit={newusers.handleSubmit}>
            <img style={{width:"200px"}} src="https://img.freepik.com/premium-photo/close-up-portrait-asian-little-happy-girl-with-shopping-bags-isolated-light-blue-background_146508-3232.jpg" alt="" /><br/>
            <h3>Registration</h3>

           <i className="bi bi-person-fill" >Username :</i> <br></br>
            <input type="text" placeholder="username" value={newusers.values.username} name="username" onChange={newusers.handleChange} onBlur={newusers.handleBlur}/> <br />
           <i class="bi bi-lock-fill">Password :</i> <br></br>
             <input type="text"placeholder="password"  value={newusers.values.password} name="password" onChange={newusers.handleChange} onBlur={newusers.handleBlur}/><br />
             Comfirm password : <br />
            <input type="text"placeholder="comform password" value={newusers.values.password} name="password" onChange={newusers.handleChange} onBlur={newusers.handleBlur}/><br />
            Role : <br/>
            <input type="text"placeholder="role" value={newusers.values.role} name="role" onChange={newusers.handleChange} onBlur={newusers.handleBlur}/><br /><br />
            <button className="btn btn-outline-dark"  >Registered</button> <b>or</b> 

            <button className="btn btn-outline-dark" onClick={()=>{Login()}}>Login</button>

            </form>
        </div>
    )
}
export default Regiration