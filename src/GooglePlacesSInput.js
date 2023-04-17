import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from './features/navSlice';

const GooglePlacesInput = ({ placeholder, styles, onPress }) => {
  const dispatch = useDispatch();
  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      onPress={onPress}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en',
      }}
      fetchDetails={true}
      nearbyPlacesAPI='GooglePlacesSearch'
      debounce={400}
      enablePoweredByContainer={false}
      returnKeyType={'search'}
      styles={styles}
    />
  );
};

export default GooglePlacesInput;
