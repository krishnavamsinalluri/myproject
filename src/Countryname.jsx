import axios from "axios"
import React from "react"
function Name(){
var [data,setData]=React.useState(["vamsi","sai","shannu"])
   return (
        <div>
            {
                data.map((a)=>{
                    return <div>
                        <li>{a}</li>
                    </div>
                })
            }
       </div>
    )
}
export default Name;