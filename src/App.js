import { OutgoingMessage } from "http"
import { Link, Outlet } from "react-router-dom"

function App(){
    return(
        <div>
          <Link to="/countrys">Countires</Link>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
    )
  
}
  export default App