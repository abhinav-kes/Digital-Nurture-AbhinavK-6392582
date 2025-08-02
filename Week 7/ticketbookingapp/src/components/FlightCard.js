const flights = [
  { id: 1, airline: 'Air India', from: 'Delhi', to: 'Mumbai', time: '10:00 AM' },
  { id: 2, airline: 'IndiGo', from: 'Chennai', to: 'Bangalore', time: '1:30 PM' },
  { id: 3, airline: 'SpiceJet', from: 'Hyderabad', to: 'Kolkata', time: '5:00 PM' }
];

function FlightCard({ showBooking }) {
  const handleBook = (flightId) => {
    alert(`Ticket booked for flight ID ${flightId}`);
  };

  return (
    <div>
      {flights.map(flight => (
        <div key={flight.id} style={{ border: '1px solid #aaa', margin: '10px', padding: '10px' }}>
          <p><strong>{flight.airline}</strong></p>
          <p>From: {flight.from}</p>
          <p>To: {flight.to}</p>
          <p>Time: {flight.time}</p>
          {showBooking && (
            <button onClick={() => handleBook(flight.id)}>Book</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default FlightCard;
