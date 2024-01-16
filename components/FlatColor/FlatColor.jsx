import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Card from './components/Card';

const FlatColor = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flat Color</Text>
      <View style={styles.cardContainer}>
        <Card backgroundColor="#3C0753" title="#3C0753" />
        <Card backgroundColor="#3E3232" title="#3E3232" />
        <Card backgroundColor="#1D2B53" title="#1D2B53" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
});

export default FlatColor;
