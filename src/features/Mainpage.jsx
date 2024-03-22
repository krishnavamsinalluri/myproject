import { useFormik } from 'formik'
import React from 'react'
import {  useLazyGettiketsByNameQuery } from '../servers/tikecks'
import { useNavigate } from 'react-router-dom'
function Mainpage() {
     var navi=   useNavigate()
   var [rfn]= useLazyGettiketsByNameQuery()
    var main=useFormik({
        initialValues:{
            "from":"","to":"","date":""
        },
        onSubmit:(values)=>{
            rfn(values).then((res)=>{
                window.localStorage.setItem("tikecks",JSON.stringify(res.data))
                if(res.data.length===0){
                    alert("Please Search for Bus")
                }
                else{
                 navi('/dashboard')
                }
            })
            console.log(values)
        }
    })
  return (
    <div className='frist '>

      <div className='mains '>
           <form onSubmit={main.handleSubmit} className=' shadow-lg p-4 bg-secondary bg-opacity-75 needs-validation' >
            <input type="text" className="form-control" placeholder='From' name='from' onChange={main.handleChange}/><br />
            <input type="text" className="form-control" placeholder='To' name="to"onChange={main.handleChange} /><br />
            <input type="date"  className="form-control"name='date' onChange={main.handleChange} /><br />
            <button className='btn btn-primary bi bi-search'>save</button>
            </form>
            </div>

    </div>
  )
}

export default Mainpage