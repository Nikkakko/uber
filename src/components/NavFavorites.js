import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';

const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'Code Street, London, UK',
  },

  {
    id: '456',
    icon: 'briefcase',
    location: 'Work',
    destination: 'London Eye, London, UK',
  },
];

const NavFavorites = ({ onPress }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          className='flex-row items-center p-4'
          onPress={onPress}
        >
          <Icon
            className='mr-4 rounded-full bg-gray-300 p-3'
            name={item.icon}
            type='ionicon'
            color='white'
            size={18}
          />

          <View className='flex-1'>
            <Text className='font-semibold text-lg'>{item.location}</Text>
            <Text className='text-gray-500'>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={() => (
        <View className='bg-gray-200' style={{ height: 0.6 }}></View>
      )}
    />
  );
};

export default NavFavorites;
