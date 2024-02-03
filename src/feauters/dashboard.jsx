import { useNavigate } from "react-router"
import Products from "./Product"
import Customer from "./customerproduct"

function Dashboard(){
       var nav= useNavigate()
    var {usersdetails,role,username} =JSON.parse(window.localStorage.getItem('users'))[0]
    console.log(usersdetails)
        function Log(){
            nav("/")
        }
 return(
    <div>
                  <div>
            <nav class="navbar bg-primary">
                <div class="container-fluid">
                    <h3 className="navbar-brand mb-0 h1 " ><h1 className="bi bi bi-person-circle text-light"> {username}</h1></h3>

                <h1 className="navbar-brand mb-0 h1 " ><h1 className="text-light ">Dashbord of {role}</h1></h1>

                    <h3 class="navbar-brand mb-0 h1 " onClick={()=>{Log()}}><b className="text-light">Logout</b></h3>
                </div>
                </nav>
            </div>
         
        {
            role==="manager" && <Products></Products>

        }
        {
            
        }
        {
            role ==="customer" && <Customer></Customer>
        }
    </div>
  )  
}
export default Dashboard