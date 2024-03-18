import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useGetallSeatQuery,  useUpdatetickMutation } from '../servers/seat';

function Busseat() {
  var navi=  useNavigate()
  const { isLoading, data } = useGetallSeatQuery();
  const [seatStatuses, setSeatStatuses] = useState();
  const [up] = useUpdatetickMutation();

  function updateSeatStatus(id) {
    const updatedData = data.map(seats => {

      if (seats.id === id) {
        return { ...seats, seatstatues: "book" };
      }
      return seats;
    });
    up({id, seatstatues: "book"});
    setSeatStatuses(...updatedData);
    console.log(updatedData);
    alert(JSON.stringify(updatedData))
  }
    function ab(){
      navi('/Booking')
    }

  return (
    <>
      <div className='container'>
      <div className='w-100'>
        <div className='d-flex flex-wrap w-75 m-4'>
        <table  className='border w-5' >
          <thead>
          <tr ><th></th><h2 class="bi bi-crosshair"></h2>
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
                <table className='border '  >
          <thead>
            <tr>
            <th><i class="bi bi-app text-primary "></i></th>
            <th><i class="bi bi-app text-success"></i></th>
           </tr>
         </thead>
         <tbody>
          <tr>
            <td>Aviable</td>
            <td>Booked</td>
          </tr>
          <tr>          
              <td style={{textAlign:"center"}}><button onClick={()=>{ab()}}>Book</button></td>
              </tr>
         </tbody>
        </table>
 
                </div>
                </div>
        </div>
     </div>
 </div>
     
    </>
  );
}

export default Busseat;
