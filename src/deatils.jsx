import React from "react"
var Data=React.forwardRef(function(props,ref1){
var addresRef=React.useRef()
function focusAddres(e){
    if(e.key==="Enter"){
        addresRef.current.focus()
    }
}
return (
    <div className="box">
       details: <input type=" text" ref={ref1} onKeyUp={(e)=>{focusAddres(e)}} />
    </div>
)
})
export default Data