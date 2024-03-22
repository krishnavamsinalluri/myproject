import { useFormik } from 'formik'
import React from 'react'
import { useLazyGetUsersByNameQuery } from '../servers/users'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
    <div className='log'>
        <div className='login'>
                    <form onSubmit={login.handleSubmit} className='w-20 shadow-lg p-4 bg-secondary bg-opacity-75 needs-validation '>
                    <h1 style={{textAlign:"center"}}>Sign in</h1>

            <input  className="form-control" type="text" placeholder='UserName' onChange={login.handleChange} /><br />
            <input className="form-control" type="text" placeholder='Passwoard' onChange={login.handleChange} /><br />
            <button  className='btn btn-dark ' >Sig in</button><br />

         New user?  <Link to="/newuser"className='text-primary'>Create New Account?</Link> 
        </form>

        </div>
    </div>
  )
}

export default Login