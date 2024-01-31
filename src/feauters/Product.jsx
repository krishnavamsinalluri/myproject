import { useNavigate,  } from "react-router-dom"
import { useDeleteProductMutation, useGetAllProductsByNameQuery, useLazyGetAllProductsByNameQuery } from "../severs/product"

function Products(){
   var {data} =useGetAllProductsByNameQuery()
   var [fn]=useDeleteProductMutation()
   var [rfun]=useLazyGetAllProductsByNameQuery()
     var nav =   useNavigate()
     //console.log ("pdata"+data)
    function Productdelte(id){
        fn(id).then((res)=>{
            rfun()
        })
    }
    function Productedit(id){
        nav(`/editprodocts/${id}`)
    
    }
    function Addproduct(){
    
        nav("/addproducts")
    }
    function logout(){
        nav("/")
    }

    return(
        <div >
           
           <nav class="navbar bg-primary">
            <div class="container-fluid">
                <h3 class="bi bi-plus-square-fill" onClick={()=>{Addproduct()}}>Add new products</h3>
                <h3 class="navbar-brand mb-0 h1" onClick={()=>{logout()}}>Logout</h3>

            </div>
            </nav>

        

          <div className="products">
        <ul className="d-flex flex-wrap">
        {
           data && data.map((b)=>{
                return (
                    <li className="card w-50px m-3 p-3">
                        {b.title}
                    <img style={{width:"100px"}} src={b.image} alt="" />
                    <br />
                    <b>${b.price}</b>
                    
                    <i class="bi bi-trash3-fill" onClick={()=>{Productdelte(b.id)}}>Delete</i>&nbsp;&nbsp;&nbsp;
                          <i class="bi bi-pencil-square" onClick={()=>{Productedit(b.id)}}>Edit</i>
                    </li>
                )

                    
            
            })
        }
        </ul>
        </div>
   
        </div>
 ) 
}
export default Products