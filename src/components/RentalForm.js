import React, { useState } from 'react';
import '../styles/RentalForm.css'
import Button from '../components/Button';

const RentalForm = ({ onAddRental }) => {
    const [formData, setFormData] = useState({
        id:'',
        isbn: '',
        duration: 0,
        contactInfo: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'duration' ? Number(value) : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRental = {
            ...formData,
            id: Date.now().toString()
        };

        onAddRental(newRental);

        console.log('Datos del formulario:', newRental);
        setFormData({
            id:'',
            isbn: '',
            duration: 0,
            contactInfo: ''
        });
    };

  return (
    <div className='rental-form'>
        <h2 className='center-tex'>Alquiler de Libros</h2>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
            <label htmlFor='isbn'>ISBN del libro:</label>
            <input
            type='text'
            id='isbn'
            name='isbn'
            value={formData.isbn}
            onChange={handleInputChange}
            placeholder='Ingresa el ISBN del libro'
            required />
            </div>

            <div className='form-group'>
            <label htmlFor='duration'>Duración del alquiler:</label>
            <input
            type='number'
            id='duration'
            name='duration'
            value={formData.duration}
            onChange={handleInputChange}
            placeholder='ej. 5 días'
            required />
            </div>

            <div className='form-group'>
            <label htmlFor='contactInfo'>Información de Contacto:</label>
            <textarea
            id='contactInfo'
            name='contactInfo'
            value={formData.contactInfo}
            onChange={handleInputChange}
            placeholder='Ingresa tu nombre y dirección de contacto'
            required ></textarea>
            </div>
            {/* <button type="submit">Alquilar</button> */}
            <Button type='primary pill lg' text="Alquilar"/>

        </form>
    </div>
  );
};

export default RentalForm;