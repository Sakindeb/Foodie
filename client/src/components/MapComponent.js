import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import styles from '../styles/MapComponent.module.css'; // Update with your styles

const containerStyle = {
  width: '100%',
  height: '700px',
};

const center = {
  lat: -1.2921,
  lng: 36.8219,
};

const MapComponent = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch restaurant data from backend API
    fetch('http://localhost:5000/restaurants')
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  

  const handleMarkerClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleInfoWindowClose = () => {
    setSelectedRestaurant(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.map}>
        <LoadScript googleMapsApiKey="AIzaSyDstIuECWCKFBzptmYZUiVQfd71Dooi6ss">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            data-testid="map-component"
          >
            {restaurants.map((restaurant) => (
              <Marker
                key={restaurant.id}
                position={{ lat: restaurant.lat, lng: restaurant.lng }}
                onClick={() => handleMarkerClick(restaurant)}
              />
            ))}

            {selectedRestaurant && (
              <InfoWindow
                position={{ lat: selectedRestaurant.lat, lng: selectedRestaurant.lng }}
                onCloseClick={handleInfoWindowClose}
              >
                <div>
                  <h2>{selectedRestaurant.name}</h2>
                  <img src={selectedRestaurant.image} alt={selectedRestaurant.name} />
                  <p>{selectedRestaurant.details}</p>
                  <button onClick={() => window.open('/', '_blank')}>
                    View Restaurant
                  </button>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default MapComponent;
