// LocationTracker.jsx

import React, { useState, useEffect } from 'react';

const LocationTracker = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let watchId = null;

    const updateLocation = (position) => {
      const { latitude, longitude } = position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
    };

    const errorHandler = (error) => {
      console.error('Error fetching location:', error);
      setError(error.message);
    };

    if ('geolocation' in navigator) {
      watchId = navigator.geolocation.watchPosition(
        updateLocation,
        errorHandler
      );

      // Fetch initial location
      navigator.geolocation.getCurrentPosition(
        updateLocation,
        errorHandler
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }

    return () => {
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  return (
    <div>
      <h1>Current Location</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <p>
          Latitude: {latitude !== null ? latitude.toFixed(6) : 'Unknown'}, Longitude: {longitude !== null ? longitude.toFixed(6) : 'Unknown'}
        </p>
      )}
    </div>
  );
};

export default LocationTracker;
