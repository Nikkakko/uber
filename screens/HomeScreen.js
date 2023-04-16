import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavOptions from '../src/components/NavOptions';

import GooglePlacesInput from '../src/GooglePlacesSInput';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../src/features/navSlice';

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

        <GooglePlacesInput />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
