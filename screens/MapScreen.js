import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../src/components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <View className='h-1/2'>
        <Map />
      </View>

      <View className='h-1/2'>
        <Stack.Navigator>
          <Stack.Screen name='MapScreen' component={MapScreen} />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
