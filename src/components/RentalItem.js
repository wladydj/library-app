import React from 'react';
import Button from './Button';

const RentalItem = ({ rental, onExtend }) => {
    const handleExtend = () => {
        onExtend(rental.id);
    };

  return (
    <div className='rental-item'>
        <h2>ISBN: {rental.isbn}</h2>
        <p>Duración: {rental.duration}</p>
        <p>Información de Contacto: {rental.contactInfo}</p>
        <Button type='secundary pill lg' text='Extender plazo' onClick={handleExtend}/>
        {/* <button onClick={handleExtend}>Exxxxx</button> */}
    </div>
  );
};

export default RentalItem;