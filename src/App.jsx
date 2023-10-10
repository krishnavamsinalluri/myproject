import React from "react";
import Data from "./deatils";
function App(){

var fristnameRef=React.useRef()
var lastnameRef=React.useRef()
var detailsRef=React.useRef()
React.useEffect(()=>{
fristnameRef.current.focus()
},[])
function focusLastname(e){
    if(e.key==="Enter"){
        lastnameRef.current.focus()
    }
}
function focusDetails(e){
    if(e.key==="Enter"){
        detailsRef.current.focus()
    }
}
    return(
        <div className="box">
          Firstname:  <input type="text"  ref={fristnameRef} onKeyUp={(e)=>{focusLastname(e)}}/> <br />
          LastName: <input type="text"  ref={lastnameRef} onKeyUp={(e)=>{focusDetails(e)}}/> <br />
          <Data ref={detailsRef}></Data>
        </div>
    )
}
export default App