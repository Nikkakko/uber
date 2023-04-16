import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const { origin } = useSelector(state => state.nav);

  const ItemList = ({ title, image, onPress }) => {
    return (
      <TouchableOpacity
        className='p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40'
        onPress={onPress}
        disabled={!origin}
      >
        <View className={`${!origin && 'opacity-20'}`}>
          <Image
            style={{ width: 120, height: 120, resizeMode: 'contain' }}
            source={{ uri: image }}
          />
          <Text className='mt-2 text-lg font-semibold'>{title}</Text>
          <Icon
            className='p-2 bg-black rounded-full w-10 mt-4'
            type='antdesign'
            name='arrowright'
            color='white'
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ItemList
          title={item.title}
          image={item.image}
          onPress={() => navigation.navigate(item.screen)}
        />
      )}
    />
  );
};

export default NavOptions;
