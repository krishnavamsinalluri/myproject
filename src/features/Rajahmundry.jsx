import React from 'react'
import { useGetAlltiketsQuery } from '../servers/tikecks';
import { Link } from 'react-router-dom';

function Rajahmundry() {
  var { isLoading, data } = useGetAlltiketsQuery();
  console.log(data);
 
  return (
    <div>
      <div>
      <div style={{textAlign:"center"}}>
        {
          data && data.map((bus)=>{
            if(bus.from==="Rajahmundry" && bus.to==="Visakapatanam"){
              return(
                <div  >
                    <div >
                    <h4>{bus.from}<i class="bi bi-arrow-right"></i>{bus.to}</h4> 
                    </div>

                    <Link to="/dashboard/Bus" className='text-decoration-none'>
                    <div className='d-flex justify-content-center' >
                    <div className=' card w-50  m-2 p-4 bg-primary ' >
                  <span> <b>{bus.start}</b> <i class="bi bi-arrow-right"></i> {bus.end} <span> From:<b>{bus.price}</b></span></span> 
                 <h6>{bus.busname}<i class="bi bi-bus-front"></i></h6> 
                  <span>{bus.bustype}</span>
                 </div>
                </div>
                </Link>

                    </div>
                  
             )
            }
          })
        }
      </div>

      </div>
    </div>
  )
}

export default Rajahmundry