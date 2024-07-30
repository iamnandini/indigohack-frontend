// SubscribeForm.jsx
import React, { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [flightId, setFlightId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, flight_id: flightId }),
    });

    if (response.ok) {
      alert('Subscribed successfully!');
    } else {
      alert('Subscription failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Flight ID:
        <input
          type="text"
          value={flightId}
          onChange={(e) => setFlightId(e.target.value)}
        />
      </label>
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default SubscribeForm;
