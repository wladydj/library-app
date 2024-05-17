import React, { useState } from 'react';
import RentalForm from '../components/RentalForm';
import RentalItem from '../components/RentalItem';

const Rental = () => {
  const [rentals, setRentals] = useState([]);

  const handleAddRental = (newRental) => {
    setRentals([...rentals, newRental]);
  };

  const handleExtend = (rentalId) => {
    const updatedRentals = rentals.map(
      (rental) => {
        if (rental.id === rentalId) {
          return {...rental, duration: rental.duration + 7 };
        }
        return rental;
      }
    );
    setRentals(updatedRentals);
  };


  return (
    <>
    <div className="divider"></div>
    <RentalForm onAddRental={handleAddRental} />
    <div className='rental-list'>
      <h2>Mis alquileres</h2>
      {rentals.map((rental) => (
        <RentalItem key={rental.id} rental={rental} onExtend={handleExtend} />
      ))}
    </div>
    </>
  );
};

export default Rental;