
import React from "react"
import { Link, Outlet } from "react-router-dom";
function App() { 
  return (
      <div className="box ">
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>

 );
}

export default App;