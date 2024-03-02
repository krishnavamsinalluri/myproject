import { useNavigate } from "react-router"
import { useGetProductsByNameQuery } from "../severs/product"

function Customer(){
  var {data} = useGetProductsByNameQuery()
  console.log(data)
 var navi= useNavigate()
  function buyprodut(id){
        navi(`/dashbord/buyprouct/${id}`)
  }
  
    return( 
        <div className="cust" >
             <ul className="d-flex flex-wrap">
             {
                data && data.map((c)=>{
                    return <li className="card w-2 m-3 p-5">
                      <div class="card-body">
                      <p class="card-title">{c.title}</p>
                      <img className="card-img-top "  style={{width:"100px"}}src={c.image} alt="" />
                        <br />
                        <span class="badge bg-secondary ">${c.price}</span><br /><br />
                        <button type="button" class="btn btn-outline-secondary" onClick={()=>{buyprodut(c.id)}}>BuyNow</button>&nbsp;
                    </div>                  
                </li>
                })
            }
             </ul>


        </div>
    )
}
export default Customer