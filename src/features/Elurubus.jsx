import React from 'react';
import { useGetAlltiketsQuery } from '../servers/tikecks';

function Elurubus() {
  var { isLoading, data } = useGetAlltiketsQuery();
  console.log(data);

  return (
    <div>
      <div>
        {data && data.map((bus) => {
          return (
            <li key={bus.id}>{bus.from}</li>
          );
        })}
      </div>
    </div>
  );
}

export default Elurubus;
