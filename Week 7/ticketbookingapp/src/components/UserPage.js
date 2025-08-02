import FlightCard from './FlightCard';

function UserPage() {
  return (
    <div>
      <h3>Available Flights (Click to Book):</h3>
      <FlightCard showBooking={true} />
    </div>
  );
}

export default UserPage;
