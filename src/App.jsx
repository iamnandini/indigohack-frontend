import React, { useEffect, useState } from "react";
// import "./index.css";
import FlightStatus from "./components/FlightStatus";
import SubscribeForm from "./components/SubscribeForm";


const App = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/flight-status")
      .then(response => response.json())
      .then(data => setFlights(data))
      .catch(error => console.error("Error fetching line details:", error));

  }, []);

  console.log(flights);

  return (
    <div className="container">

    <header className="header">
      <div className="logo">
        <img src="https://s6web-prod.goindigo.in/content/dam/s6web/in/en/assets/logo/IndiGo_logo_2x.png" />
      </div>
    </header>
    
    <div className="heading">
      <p className="intro" > Let's Check <p> Flight</p> Status.</p>
    </div>

      <FlightStatus flights={flights} />
    </div>

  );
};

export default App;
