
import React from "react"
import { Link, Outlet } from "react-router-dom";
function App() { 
  return (
      <div className="box ">
        <Link to="/countrys">Countries</Link>&nbsp;&nbsp;
        <div className="box">
          <Outlet></Outlet>
        </div>
      </div>

 );
}

export default App;