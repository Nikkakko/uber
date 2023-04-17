import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

const data = [
  {
    id: 'Uber-X-123',
    title: 'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },

  {
    id: 'Uber-XL-456',
    title: 'UberXL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },

  {
    id: 'Uber-LUX-789',
    title: 'UberLUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const { travelTimeInformation } = useSelector(state => state.nav);

  const SURGE_CHARGE_RATE = 1.5;

  return (
    <SafeAreaView className='bg-white flex-grow '>
      <View>
        <TouchableOpacity
          className='absolute top-3 left-5 z-50 p-3 rounded-full

      '
          onPress={() => navigation.navigate('NavigateCard')}
        >
          <Icon name='chevron-left' type='font-awesome' />
        </TouchableOpacity>

        <Text className='text-center py-5 text-xl'>
          Select a ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`flex-row justify-between items-center px-10 ${
              item.id === selected?.id && 'bg-gray-200'
            }`}
            onPress={() => setSelected(item)}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={{ uri: item.image }}
            />
            <View className='-ml-6'>
              <Text className='text-xl font-semibold'>{item?.title}</Text>
              <Text className='text-gray-500'>
                {travelTimeInformation?.duration?.text}
              </Text>
            </View>

            <Text className='text-xl'>
              {new Intl.NumberFormat('en-gb', {
                style: 'currency',
                currency: 'GBP',
              }).format(
                (travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  item.multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View className='mt-auto border-t border-gray-200'>
        <TouchableOpacity
          className={`bg-black py-3 m-3 ${
            !selected && 'bg-gray-300'
          } rounded-full`}
          disabled={!selected}
        >
          <Text className='text-center text-white text-xl'>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
