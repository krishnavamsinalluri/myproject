import React from "react";
import { Link, Outlet } from "react-router-dom";
function Admindashboard(){
    return(
        <div>
            <h1>Admin dash board</h1>
            <Link to="addhospital"><button className="btn  btn-success">+Add Hospital</button>
         </Link>    
         <Link to="addbed"><button className="btn  btn-danger">Add bed</button></Link>
              <Outlet></Outlet>
        </div>
    )
}
export default Admindashboard