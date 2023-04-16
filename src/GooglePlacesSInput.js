import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from './features/navSlice';

const GooglePlacesInput = () => {
  const dispatch = useDispatch();
  return (
    <GooglePlacesAutocomplete
      placeholder='Where from?'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        dispatch(
          setOrigin({
            location: details.geometry.location,
            description: data.description,
          })
        );
        dispatch(setDestination(null));
      }}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en',
      }}
      fetchDetails={true}
      nearbyPlacesAPI='GooglePlacesSearch'
      debounce={400}
      enablePoweredByContainer={false}
      returnKeyType={'search'}
      styles={{
        container: {
          flex: 0,
        },
        textInput: {
          fontSize: 18,
        },
      }}
    />
  );
};

export default GooglePlacesInput;
