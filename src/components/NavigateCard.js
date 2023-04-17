import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GooglePlacesInput from '../GooglePlacesSInput';
import { useDispatch, useSelector } from 'react-redux';
import { setDestination } from '../features/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavorites from './NavFavorites';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { origin, destination } = useSelector(state => state.nav);

  return (
    <SafeAreaView className='bg-white flex-1 justify-between'>
      <Text className='text-center py-5 text-xl'>
        Good Morning, <Text className='font-bold'>John Doe</Text>
      </Text>

      <View className='border-t border-gray-200 flex-shrink'>
        <View className=''>
          <GooglePlacesInput
            placeholder='Where to?'
            styles={toInputBoxStyles}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details?.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate('RideOptionsCard');
            }}
          />
        </View>

        <NavFavorites />

        <View className='flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100'>
          <TouchableOpacity
            className='flex-row items-center justify-between bg-black w-24  py-3 px-4 rounded-full'
            onPress={() => navigation.navigate('RideOptionsCard')}
          >
            <Icon name='car' type='font-awesome' color='white' size={16} />
            <Text className='text-white text-center'>Rides</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className='flex-row justify-between w-24 px-4 py-3 rounded-full'
            onPress={() => navigation.navigate('EatsScreen')}
          >
            <Icon
              name='fast-food-outline'
              type='ionicon'
              color='black'
              size={16}
            />
            <Text className='text-center'>Eats</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },

  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },

  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});

export default NavigateCard;
