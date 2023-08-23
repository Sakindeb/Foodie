import React, { useState } from 'react';
import styles from '../styles/CreateRestaurantForm.module.css'
function CreateRestaurantForm() {
    const [name, setName] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [image, setImage] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            name,
            lat: parseFloat(lat),
            lng: parseFloat(lng),
            image,
            details
        };

        try {
            const response = await fetch('http://localhost:5000/restaurants', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Restaurant added successfully');
                // Clear the form
                setName('');
                setLat('');
                setLng('');
                setImage('');
                setDetails('');
            } else {
                alert('Failed to add restaurant');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
      <div className="container mx-auto">
            <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          
            <h1>Add a New Restaurant</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />

                <label htmlFor="lat">Latitude:</label>
                <input type="number" id="lat" value={lat} onChange={(e) => setLat(e.target.value)} step="0.000001" required /><br /><br />

                <label htmlFor="lng">Longitude:</label>
                <input type="number" id="lng" value={lng} onChange={(e) => setLng(e.target.value)} step="0.000001" required /><br /><br />

                <label htmlFor="image">Image URL:</label>
                <input type="url" id="image" value={image} onChange={(e) => setImage(e.target.value)} /><br /><br />

                <label htmlFor="details">Details:</label>
                <textarea id="details" value={details} onChange={(e) => setDetails(e.target.value)} /><br /><br />

                <input type="submit" value="Add Restaurant" />
            </form>
        </div>
        </div>
        </div>
    );
}

export default CreateRestaurantForm;

