import { useFormik } from 'formik'
import React from 'react'

function Booking() {
var book=useFormik({
        initialValues:{"name":"","age":"","gender":"","bordeingpoint":"","onbordingpoit":""},
        onSubmit:(values)=>{
            console.log(values)
        }
    })
  return (
    <div>
        <div>
            <form onSubmit={book.handleSubmit} >
                <input type="text"placeholder='Passenger Name ' name='name'onChange={book.handleChange}  /><br />
                <input type="radio" name='gender' value={"male"} onChange={book.handleChange}/>Male<br></br>
                <input type="radio" name='gender' value={"female"} onChange={book.handleChange}/>Female<br></br>
                <input type="text" name='age' placeholder='Age'  onChange={book.handleChange}/><br></br>
                <input type="text"placeholder='Bording Point ' name='bordeingpoint'onChange={book.handleChange}  /><br />
                <input type="text"placeholder='Onbording Point' name="onbordingpoit" onChange={book.handleChange}  /><br />

                    <button>Save</button>
            </form>

        </div>
    </div>
  )
}

export default Booking