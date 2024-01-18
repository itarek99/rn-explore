import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const CurrencySwitch = ({item, onPress, selectedCurrency}) => {
  const backgroundColor =
    item.name === selectedCurrency.name ? 'lightgreen' : 'lightblue';
  return (
    <Pressable
      onPress={() => onPress(item)}
      style={[
        styles.container,
        {
          backgroundColor,
        },
      ]}>
      <Text style={styles.flag}>{item.flag}</Text>
      <Text style={styles.name}>{item.name}</Text>
    </Pressable>
  );
};

export default CurrencySwitch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    borderRadius: 4,
    padding: 10,
    flexGrow: 1,
  },
  flag: {
    fontSize: 24,
  },
  name: {
    fontSize: 15,
  },
});
