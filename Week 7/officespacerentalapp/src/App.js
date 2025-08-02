import React from 'react';
import './App.css';
import offImg from './assets/office.jpg';

const App = () => {
  const element = "Office Space";
  const ItemName = { Name: "DBS", Rent: 50000, Address: "Chennai" };
  const rentColorClass = ItemName.Rent <= 60000 ? 'textRed' : 'textGreen';

  return (
    <div className="container">
      <h1>{element}, at Affordable Range</h1>
      <img src={offImg} width="25%" height="25%" alt="Office Space" />

      <h2>Name: {ItemName.Name}</h2>
      <h3 className={rentColorClass}>Rent: ₹{ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
};

export default App;
