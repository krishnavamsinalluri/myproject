import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useGetallSeatQuery, useUpdatetickMutation } from '../servers/seat';

function Busseat() {
  const { isLoading, data } = useGetallSeatQuery();
  const [seatStatuses, setSeatStatuses] = useState(null);
  const [up] = useUpdatetickMutation();

  function updateSeatStatus(id) {
    const updatedData = data.map(seat => {
      if (seat.id === id) {
        return { ...seat, seatstatues: "book" };
      }
      return seat;
    });
    up(updatedData);
    setSeatStatuses(updatedData);
  }

  console.log(data);

  return (
    <>
      <div className='border w-4'>
        <table>
          <thead>
            <tr>
              <th>Lower</th>
              <th>Upper</th>
              <th>Middle</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((s, index) => (
              <tr key={index}>
                <td className='p-2 m-2 text-light'>{s.seat} <i className="bi bi-laptop text-primary" onClick={() => { setSeatStatuses(s.id) }}></i></td>
                <td className='p-2 m-2 text-light'>{s.sleeper} <i className="bi bi-phone-landscape text-primary" onClick={() => { updateSeatStatus(s.id) }}></i></td>
                <td className='p-2 m-2 text-light'>{s.sleeper} <i className="bi bi-phone-landscape text-primary"></i></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Busseat;
