
const FlightStatus = ({ flights }) => {
  return (
    <div>
      <table className="table_container">
        <thead>


          <tr>
            <th className="title">Flight ID</th>
            <th className="title">Gate</th>
            <th className="title">Status</th>
            <th className="title">Time</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.flight_id}>
              <td className="flight_it">{flight.flight_id}</td>
              <td className="flight_gate">{flight.gate}</td>
              <td className="flight_remark">{flight.remark}</td>
              <td className="flight_time">{flight.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightStatus;


// import React, { useState, useEffect } from 'react';

// const FlightStatus = () => {
//   const [flights, setFlights] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/flights')
//       .then(response => response.json())
//       .then(data => setFlights(data));
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold">Flight Status</h1>
//       <ol>
//         {flights.map(flight => (
//           <li key={flight._id} className="border p-2 my-2">
//             {flight.status}
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default FlightStatus;
