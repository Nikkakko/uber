import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EatsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>EatsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EatsScreen;
