import { Outlet } from "react-router-dom"
function App(){
    return(
        <div>
        <div className="card">
            <Outlet></Outlet>
        </div>

      </div>
    )
}
  export default App