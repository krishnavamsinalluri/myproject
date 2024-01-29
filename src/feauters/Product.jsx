import { useDeleteProductMutation, useGetAllProductsByNameQuery, useLazyGetAllProductsByNameQuery } from "../severs/product"

function Products(){
   var {data} =useGetAllProductsByNameQuery()
   var [fn]=useDeleteProductMutation()
   var [rfun]=useLazyGetAllProductsByNameQuery()
   console.log(data)
    function Productdelte(id){
        fn(id).then((res)=>{
            rfun()
        })
    }

    return(
        <div className="card">
        <ul className="d-flex flex-wrap">
        {
            data && data.map((b)=>{
                return (
                    <li className="card w-50px m-3 p-3">
                        {b.title}
                    <img style={{width:"100px"}} src={b.image} alt="" />
                    <br />
                    <b>{b.price}</b>
                    <button onClick={()=>{Productdelte(b.id)}}>Delete</button>
                    </li>
                )

                    
            
            })
        }
        </ul>
        </div>
    ) 
}
export default Products