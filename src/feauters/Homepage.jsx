import Regiration from "./Registration"

function Home(){

    return (
        <div className="home row">
                <div className="col">
                <div style={{textAlign:"end"}}>  
                    <h1 className="text-" style={{fontStyle:"italic",fontSize:"50px"}}>Online Shopping App</h1>         
                </div>
                </div>
                <div className="col">
                
                    <Regiration></Regiration>
                </div>
            </div>

    )
}
export default Home