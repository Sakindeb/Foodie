import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import styles from '../styles/MapComponent.module.css';
import Rest from '../assets/man.png'
const containerStyle = {
  width: '100%',
  height: '600px',
};

const center = {
  lat: -1.2921,
  lng: 36.8219,
};

const restaurants = [
  {
    id: 1,
    name: 'Delicious Bites',
    lat: -1.2921,
    lng: 36.8219,
    image: 'https://i.roamcdn.net/hz/pi/listing-thumb-543w/225461cd9232ba7f3bf83ed1365d8df3/-/horizon-files-prod/pi/picture/qeemje9/df5f714dc040a2aa48262a907ecbb52234bc97bf.jpg',
    details: 'A cozy restaurant offering a variety of cuisines.',
  },
  {
    id: 2,
    name: 'Savory Corner',
    lat: -1.2950,
    lng: 36.8225,
    image: 'https://example.com/images/restaurant2.jpg',
    details: 'Experience fine dining with a touch of elegance.',
  },
  {
    id: 3,
    name: 'Spice Fusion',
    lat: -1.2915,
    lng: 36.8195,
    image: 'https://example.com/images/restaurant3.jpg',
    details: 'Discover a fusion of flavors from around the world.',
  },
  // Add more restaurant objects here
];


const MapComponent = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

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
                  <button onClick={() => window.open('URL_TO_VIEW_RESTAURANT', '_blank')}>
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

