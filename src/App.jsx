
import React from "react"
import {Link,Outlet}  from "react-router-dom"

function App() {
  return (
    <div className="box">
    <div className="heading"> <Link to="/Country">Countries</Link>
          </div>
      <Outlet></Outlet>

    </div>
  );
}

export default App;
