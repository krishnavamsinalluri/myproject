import { useFormik } from 'formik'
import React from 'react'
import { useAddbookMutation } from '../servers/book'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

function Booking() {
   var navi= useNavigate()
    var [post]=useAddbookMutation()
var book=useFormik({
        initialValues:{"name":"","age":"","gender":"","bordeingpoint":"","onbordingpoit":"","phonenumber":""},
        onSubmit:(values)=>{
            post((values))
            navi('/Statues')
        }
    })
 return (
    <div className='Booking'>
        <div>
            <Navbar></Navbar>
        </div>
        <div id='book'>
            <form onSubmit={book.handleSubmit} className='w-25 shadow-lg p-4 bg-secondary bg-opacity-75 needs-validation   ' style={{textAlign:"center"}}>
                <input type="text" className='form-control' placeholder='Passenger Name ' name='name'onChange={book.handleChange}  /><br />
                <input type="radio"  name='gender' value={"male"} onChange={book.handleChange}/>Male<br></br>
                <input type="radio"  name='gender' value={"female"} onChange={book.handleChange}/>Female<br></br>
                <input type="text" className='form-control' name='age' placeholder='Age'  onChange={book.handleChange}/><br></br>
                <input type="text" className='form-control' name='phonenumber' placeholder='Phone Number'  onChange={book.handleChange}/><br></br>
                <input type="text" className='form-control' placeholder='Bording Point ' name='bordeingpoint'onChange={book.handleChange}  /><br />
                <input type="text" className='form-control' placeholder='Onbording Point' name="onbordingpoit" onChange={book.handleChange}  /><br />

                    <button className='btn btn-primary'>Save</button><br /><br />

            </form>


        </div>
       </div>


  )
}

export default Booking