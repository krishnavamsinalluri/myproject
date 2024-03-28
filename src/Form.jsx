import React, { useState } from 'react'
import { useFormik } from 'formik'
function Form() {
  var [data,setData]=useState([])

    var deat=useFormik({
      initialValues:{"name":"","age":""},
      onSubmit:(values)=>{
        console.log(values);
        setData([...data,values])
      }
    })
  return (
    <div>
      <form onSubmit={deat.handleSubmit}>
     Name:   <input type="text" name='name'  onChange={deat.handleChange}  /><br />
       Age: <input type="text"  name='age' onChange={deat.handleChange}/><br />
        <button>save</button>
      </form>
      <table>
        <th>Name</th>
        <th>Age</th>
          {
            data.map((a)=>{
              return(
                <tr>
                <td>{a.name}</td>
                <td>{a.age}</td>
                </tr>
              )
            })
            }
      </table>
    </div>
  )
}
export default Form