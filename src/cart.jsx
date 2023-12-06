import React from "react"
import { Link, Outlet } from "react-router-dom"
function Addcart(){
    
return(
    <div>
        <Link to="/shopping/addtocart">add</Link>
    <div>
    <Outlet></Outlet>
</div>
</div>

)

}
export default Addcart