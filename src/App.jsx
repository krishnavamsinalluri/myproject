import React from "react";
import State from "./Countrys";
import Home from "./Home";
import Addcart from "./cart";
import { Link, Outlet } from "react-router-dom";
function App(){

  return (
    <div className="box">
           <button className=" text-blue bg-white"> <Link to="/home">HOME</Link></button>&nbsp;&nbsp;
           <button className=" text-blue bg-white">  <Link to="/shopping">SHOPPING</Link></button>                    
      <div>
        <Outlet></Outlet>
      </div>
    </div>)
    
      
}
export default App