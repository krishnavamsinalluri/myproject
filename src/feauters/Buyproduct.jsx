import { useFormik } from "formik"
import { useNavigate, useParams } from "react-router"
import { useGetorderByIDQuery } from "../severs/product"

function Buyproduct(){
      var navi=  useNavigate()
  var {pid} = useParams()
  var {isLoading,data}=useGetorderByIDQuery(pid)
        console.log("data"+data)

var details= useFormik({
    initialValues:{         
      "name":"",
    "Phonenumber":0,
    "Pincode":0,
    "Bulildingname":"",
    "Landmark":"",   
},
    onSubmit:(values)=>{
        console.log(values)
        alert(" Your is Order Success")
    }
})
    function countiou(){
        navi("/dashbord")
    }
return (
            <div >
             <div className="card">
             <div>
        
        <div>
        <div  >
         <div className="d-flex flex-wrap">
            {              isLoading  && <img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" alt="" />
            }
         {
            data && data.map((c)=>{
                return <div className="card w-4 m-3 p-5">
                    <img className="card-img-top "  style={{width:"100px"}}src={c.image} alt="" />
                  <div class="card-body">
                  <p class="card-title">{c.title}</p>
                    <span class="badge bg-secondary ">${c.price}</span><br /><br />
               </div>                  
            </div>
            })
        }
         </div>

    
        </div>
    </div>
    <div>
    <div className="card">
    <form onSubmit={details.handleSubmit} className="order">
               <h1>Please Enter Delivery Adderss</h1>
                    <img style={{width:"200px"}} src="https://thumbs.dreamstime.com/b/mobile-app-navigator-track-courier-delivering-online-shop-order-van-to-background-urban-landscape-vector-181619018.jpg?w=1600" alt="" /><br></br>
              Name :<br></br>
                <input type="text" placeholder="Name"  value={details.values.name} name="name" onChange={details.handleChange} onBlur={details.handleBlur}/> <br />
              Phonenumber :<br></br>
                 <input type="text"placeholder="Phonenumber" value={details.values.Phonenumber}  name="Phonenumber" onChange={details.handleChange} onBlur={details.handleBlur}/><br />
              Pincode :<br></br>
                 <input type="text"placeholder="Pincode" value={details.values.Pincode} name="Pincode" onChange={details.handleChange} onBlur={details.handleBlur}/><br />
            Landmark :<br></br>
               <input type="text"placeholder="Landmark"  value={details.values.Landmark} name="Landmark" onChange={details.handleChange} onBlur={details.handleBlur}/><br />
          Bulildingname :<br></br>
             <input type="text" placeholder="Bulildingname" value={details.values.Bulildingname} name="Bulildingname" onChange={details.handleChange} onBlur={details.handleBlur}/><br /> <br />
    <button className="btn btn-success" >Order</button><br />
    <button className="btn btn-warning" onClick={()=>{countiou()}} >Continue shopping</button>


    </form>

</div>

    </div>
</div>
        </div>
            </div>
)
}
export default Buyproduct