import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNaN(rupees) && rupees !== '') {
      const converted = (parseFloat(rupees) * 0.011).toFixed(2); // Approximate rate
      alert(`€ ${converted} (Euros)`);
    } else {
      alert("Please enter a valid amount in INR.");
    }
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Currency Converter (INR to Euro)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter amount in INR"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
