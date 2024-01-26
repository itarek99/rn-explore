import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Details = ({route}) => {
  const data = route.params.data;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
