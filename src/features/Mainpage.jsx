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
    <div className='frist'>
      <div >
      <div id='main'>
            <form onSubmit={main.handleSubmit} className='w-25 shadow-lg p-4 bg-secondary bg-opacity-75 needs-validation' >
            <input type="text" placeholder='From' name='from' onChange={main.handleChange}/><br />
            <input type="text" placeholder='To' name="to"onChange={main.handleChange} /><br />
            <input type="date" name='date' onChange={main.handleChange} /><br />
            <button>save</button>
            </form>
            </div>
      </div>

    </div>
  )
}

export default Mainpage