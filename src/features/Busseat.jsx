import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useGetallSeatQuery,  useLazyGetallSeatQuery,  useUpdatetickMutation } from '../servers/seat';

function Busseat() {
  var navi=  useNavigate()
  const { isLoading, data } = useGetallSeatQuery();
  const [seatStatuses, setSeatStatuses] = useState();
  const [up] = useUpdatetickMutation();
  const [rup]=useLazyGetallSeatQuery()
  function updateSeatStatus(id) {
    const updatedData = data.map(seats => {

      if (seats.id === id) {
        return { ...seats, seatstatues: "book" };
      }
      return seats;
    });
    up({id, seatstatues: "book"}).then((res)=>{
      rup()
    });
    setSeatStatuses(...updatedData);
    console.log(updatedData);
    // alert(JSON.stringify(updatedData))
  }
    function ab(){
      navi('/Booking')
    }

  return (
    < div className='seat'>
      <div className='container'>
      <div className='w-100'>
        <div className='d-flex flex-wrap w-75 m-4'>
        <table  className=' border border-dark w-5' >
          <thead>
          <tr ><th></th><h2 class="bi bi-crosshair"></h2>
          <th><b class="bi bi-display text-algin-end"></b></th>
          </tr>

            <tr>
              <th>Lower</th>
              <th>Seat</th>
              <th>Upper</th>
              <th>Middle</th>
           </tr>
            </thead>
          <tbody>
            {data && data.map((s, index) => (
              <tr key={index}>
                {s.seatstatues==="open" &&<td className='p-2 m-2  bi bi-laptop text-primary' onClick={() => { updateSeatStatus(s.id) }}>{s.seat}</td>}   
                 {s.seatstatues==="book" &&<td className='p-2 m-2 text-light'>{s.seat} <i className="bi bi-laptop-fill text-success" onClick={() => { updateSeatStatus(s.id) }}></i></td>}
                 {s.seatstatues==="open" &&<td className='p-2 m-2 text-light'>{s.seat} <i className="bi bi-laptop text-primary" onClick={() => { updateSeatStatus(s.id) }}></i></td>}   
                 {s.seatstatues==="book" &&<td className='p-2 m-2 text-light'>{s.seat} <i className="bi bi-laptop-fill text-success" onClick={() => { updateSeatStatus(s.id) }}></i></td>}
                 {s.seatstatues==="open" &&<td className='p-2 m-2 text-light'>{s.sleeper} <i className="bi-phone-landscape text-primary" onClick={() => { updateSeatStatus(s.id) }}></i></td>}   
                 {s.seatstatues==="book" &&<td className='p-2 m-2 text-light'>{s.sleeper} <i className="bi-phone-landscape-fill text-success" onClick={() => { updateSeatStatus(s.id) }}></i></td>}
                 {s.seatstatues==="open" &&<td className='p-2 m-2 text-light'>{s.seat} <i className="bi bi-phone-landscape  text-primary" onClick={() => { updateSeatStatus(s.id) }}></i></td>}   
                 {s.seatstatues==="book" &&<td className='p-2 m-2 text-light'>{s.seat} <i className="bi bi-phone-landscape-fill  text-success" onClick={() => { updateSeatStatus(s.id) }}></i></td>}
              </tr>
              
            ))}
          </tbody>
        </table>

            <div className='w-25 m-5 ' >
                <div className='justify-content-center'>
                <table className='border border-dark '  >
          <thead>
            <tr>
            <th><i class="bi bi-dice-1 text-primary"></i></th>
            <th><i class="bi bi-dice-1-fill text-success"></i></th>
           </tr>
         </thead>
         <tbody>
          <tr>
            <td>Aviable</td>
            <td>Booked</td>
          </tr>
          <tr>          
              <td style={{textAlign:"center"}}><button  className='btn btn-warning' onClick={()=>{ab()}}>Book</button></td>
              </tr>
         </tbody>
        </table>
 
                </div>
                </div>
        </div>
     </div>
 </div>
     
    </div>
  );
}

export default Busseat;
