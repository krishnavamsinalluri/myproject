import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useGetallSeatQuery, useUpdatetickMutation } from '../servers/seat';

function Busseat() {
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

  return (
    <>
      <div className='container'>
      <div className='row'>
        <div className='d-flex flex-wrap col-8 m-4'>
        <table  className='border w-5' >
          <thead>
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
                 {s.seatstatues==="book" &&<td className='p-2 m-2 text-light'>{s.seat} <i className="bi bi-laptop text-success" onClick={() => { updateSeatStatus(s.id) }}></i></td>}
                 {s.seatstatues==="open" &&<td className='p-2 m-2 text-light'>{s.seat} <i className="bi bi-laptop text-primary" onClick={() => { updateSeatStatus(s.id) }}></i></td>}   
                 {s.seatstatues==="book" &&<td className='p-2 m-2 text-light'>{s.seat} <i className="bi bi-laptop text-success" onClick={() => { updateSeatStatus(s.id) }}></i></td>}
                 {s.seatstatues==="open" &&<td className='p-2 m-2 text-light'>{s.sleeper} <i className="bi-phone-landscape text-primary" onClick={() => { updateSeatStatus(s.id) }}></i></td>}   
                 {s.seatstatues==="book" &&<td className='p-2 m-2 text-light'>{s.sleeper} <i className="bi-phone-landscape text-success" onClick={() => { updateSeatStatus(s.id) }}></i></td>}
                 {s.seatstatues==="open" &&<td className='p-2 m-2 text-light'>{s.seat} <i className="bi bi-phone-landscape  text-primary" onClick={() => { updateSeatStatus(s.id) }}></i></td>}   
                 {s.seatstatues==="book" &&<td className='p-2 m-2 text-light'>{s.seat} <i className="bi bi-phone-landscape  text-success" onClick={() => { updateSeatStatus(s.id) }}></i></td>}
              </tr>
              
            ))}
          </tbody>
        </table>
            <div className='col-6' >
                <table className='table table-stripped table-border' style={{textAlign:"end"}} >
          <thead>
            <tr>
            <th>Blue</th>
            <th>Green</th>
 
            </tr>
         </thead>
         <tbody>
          <tr>
            <td>Open</td>
            <td>Booked</td>
          </tr>
         </tbody>
        </table>
 
                </div>
        </div>
     </div>
 </div>
     
    </>
  );
}

export default Busseat;
