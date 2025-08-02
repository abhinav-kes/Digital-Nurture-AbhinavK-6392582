import FlightCard from './FlightCard';

function GuestPage() {
  return (
    <div>
      <h3>Flight Details (Read-only):</h3>
      <FlightCard showBooking={false} />
    </div>
  );
}

export default GuestPage;
