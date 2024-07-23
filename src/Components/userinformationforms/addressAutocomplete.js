import React, { useState, useEffect, useRef } from 'react';
import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

const AddressAutocomplete = ({onAddressChange}) => {
  const [address, setAddress] = useState('');
  const searchBoxRef = useRef(null);

  const handlePlaceChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    if (places.length === 0) return;

    const place = places[0];
    const formattedAddress = place.formatted_address;
    setAddress(formattedAddress);
    onAddressChange(formattedAddress);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBttZZgJvkYeT875QR-lUBflT70_Cnlm_E" libraries={['places']}>
      <div>
        <StandaloneSearchBox
          onLoad={(ref) => (searchBoxRef.current = ref)}
          onPlacesChanged={handlePlaceChanged}
        >
          <input
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ width: '100%', padding: '10px' }}
          />
        </StandaloneSearchBox>
      </div>
    </LoadScript>
  );
};

export default AddressAutocomplete;
