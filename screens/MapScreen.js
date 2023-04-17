import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../src/components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../src/components/NavigateCard';
import RideOptionsCard from '../src/components/RideOptionsCard';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        className='bg-gray-50 absolute top-8 left-4 z-50 p-3 rounded-full shadow-lg'
      >
        <Icon name='menu' />
      </TouchableOpacity>

      <View className='h-1/2'>
        <Map />
      </View>
      <View className='h-1/2'>
        <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
            component={NavigateCard}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='RideOptionsCard'
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
