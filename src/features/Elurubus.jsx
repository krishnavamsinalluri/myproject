import React from 'react';
import { useGetAlltiketsQuery } from '../servers/tikecks';
import { Link } from 'react-router-dom';
function Elurubus() {
  var { isLoading, data } = useGetAlltiketsQuery();
  console.log(data);
  return (
    <div>
      <div >
        {
          data && data.map((bus)=>{
            if(bus.from==="Eluru" && bus.to==="Hyderabad"){
              return(
                <div style={{alignItems:"center"}} >
                    <div >
                    <h4>{bus.from}<i class="bi bi-arrow-right"></i>{bus.to}</h4> 
                    </div>
                    <Link to="/dashboard/Bus">

                    <div className='col d-flex ' >

                    <div className=' card  m-2 p-4 bg-primary ' >
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
  )

};


export default Elurubus;
