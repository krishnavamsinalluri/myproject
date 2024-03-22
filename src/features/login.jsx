import { useFormik } from 'formik'
import React from 'react'
import { useLazyGetUsersByNameQuery } from '../servers/users'
import { useNavigate } from 'react-router-dom'

function Login() {
    var navi=useNavigate()
    var [rfu]=useLazyGetUsersByNameQuery()
   var login= useFormik({
        initialValues:{
                "username":"","password":""
        },
        onSubmit:(values)=>{
            rfu(values).then((res)=>{
                window.localStorage.setItem("user",JSON.stringify(res.data))
                if(res.data.length===0){
                    alert("Please check detailes")
                }
                
                else{
                 navi('/mainpage')
                }
 
            })

        }
    })
  return (
    <div>
        <form onSubmit={login.handleSubmit}>
            <input type="text" placeholder='UserName' onChange={login.handleChange} /><br />
            <input type="text" placeholder='Passwoard' onChange={login.handleChange} /><br />
            <button>Sig in</button>
        </form>
    </div>
  )
}

export default Login