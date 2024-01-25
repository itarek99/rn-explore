import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {PRIMARY_COLOR} from '../../../constants/colors';

const GameListToggler = ({onChange, selectedType}) => {
  const backgroundColor = type => {
    return selectedType === type ? {backgroundColor: PRIMARY_COLOR} : {};
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          onChange('free');
        }}
        style={[styles.button, backgroundColor('free')]}>
        <Text style={styles.buttonText}>Free</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          onChange('paid');
        }}
        style={[styles.button, backgroundColor('paid')]}>
        <Text style={styles.buttonText}>Paid</Text>
      </Pressable>
    </View>
  );
};

export default GameListToggler;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    borderRadius: 12,
    backgroundColor: '#b7b7b7',
  },
  button: {
    padding: 16,
    width: '50%',
    borderRadius: 12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
