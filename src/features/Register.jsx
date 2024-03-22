import { useFormik } from 'formik'
import React from 'react'
import { useAddnewuserMutation } from '../servers/users'
import { useNavigate } from 'react-router-dom'

function Register() {
    var navi=useNavigate()
    var [rfn]=useAddnewuserMutation()
   var bus= useFormik({
    initialValues:{"username":"","password":"","phonenumber":"","email":""},
    onSubmit:(value)=>{
       rfn(value)
        navi(`/`)

    }
    })
  return (
    <div className='reg'>

    <div id='register'>
    <form onSubmit={bus.handleSubmit} className='w-25 shadow-lg p-4 bg-secondary bg-opacity-75 needs-validation '>
                <h1 style={{textAlign:"center"}}>Sign up Here</h1>
                <input type="text" className="form-control" name='username' placeholder='Enter Username' onChange={bus.handleChange}/><br />
                <input type="text" className="form-control"  name='password' placeholder='Enter Password' onChange={bus.handleChange}/><br />
                <input type="text"  className="form-control"  name='password' placeholder='Confirm Password' onChange={bus.handleChange}/><br />
                <input type="text" className="form-control"  name='phonenumber' placeholder='Enter Phone number' onChange={bus.handleChange}/><br />
                <input type="text" className="form-control"  name='email' placeholder='Enter Email' onChange={bus.handleChange}/><br />

                <button className='btn btn-primary'>Sig Up</button>
                

            </form>
    </div>
    </div>
  )
}

export default Register