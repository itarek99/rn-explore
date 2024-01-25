import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const UpcomingBanner = ({data}) => {
  return (
    <View>
      <Image style={styles.image} source={data.image} />
    </View>
  );
};

export default UpcomingBanner;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
});
