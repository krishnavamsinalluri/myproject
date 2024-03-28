import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    var navi=useNavigate()
    var {username}=JSON.parse(window.localStorage.getItem("user"))[0]
    var {from,to}=JSON.parse(window.localStorage.getItem("tikecks"))[0]

    function Log(){
        navi(`/`)
    }

  return (
    <div>
              <div>
            <nav class="navbar bg-primary">
                <div class="container-fluid">
                    <h3 className="navbar-brand mb-0 h1 " ><h1 className="bi bi bi-person-circle text-light"> {username}</h1></h3>

                <h1 className="navbar-brand mb-0 h1 " ><h1 className="text-light ">{from}<i class="bi bi-arrow-right"></i> {to}</h1></h1>
                <h3 class="navbar-brand mb-0 h1 " onClick={()=>{Log()}}><b className="text-light">Logout</b></h3>

                </div>
                </nav>
            </div>

    </div>
  )
}

export default Navbar