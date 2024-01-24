import {Link} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Details = ({route}) => {
  const product = route.params.product;
  return (
    <View style={styles.container}>
      <Text>{product.name}</Text>
      <Link to={{screen: 'Home'}}>
        <Text>View Home</Text>
      </Link>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
