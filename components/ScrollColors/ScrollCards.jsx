import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Card from './components/Card';

const ScrollCards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scroll List</Text>
      <ScrollView horizontal>
        <Card backgroundColor="#3C0753" title="#3C0753" />
        <Card backgroundColor="#3E3232" title="#3E3232" />
        <Card backgroundColor="#1D2B53" title="#1D2B53" />
        <Card backgroundColor="#3C0753" title="#3C0753" />
        <Card backgroundColor="#3E3232" title="#3E3232" />
        <Card last backgroundColor="#1D2B53" title="#1D2B53" />
      </ScrollView>
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
});

export default ScrollCards;
