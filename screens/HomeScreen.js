import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavOptions from '../src/components/NavOptions';

import GooglePlacesInput from '../src/GooglePlacesSInput';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../src/features/navSlice';
import NavFavorites from '../src/components/NavFavorites';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView className='bg-white h-full'>
      <View className='p-5 '>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />

        <GooglePlacesInput
          placeholder='Where from?'
          styles={fromInputBoxStyles}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
        />
        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  );
};

const fromInputBoxStyles = StyleSheet.create({
  container: {
    flex: 0,
  },
  textInput: {
    fontSize: 18,
  },
});

export default HomeScreen;
