import {useState, useEffect} from 'react';
import GetLocation from 'react-native-get-location';

export const Location = () => {
  const [location, setLocation]: any = useState(null);
  const getLocation = async () => {
    try {
      const location = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      });

      setLocation({
        latitude: location.latitude,
        longitude: location.longitude,
      });
    } catch (error) {
      console.log('error');
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
