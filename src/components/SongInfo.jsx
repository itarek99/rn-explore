import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SongInfo = ({track}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{track?.title}</Text>
      <Text style={styles.artist}>{track?.artist}</Text>
    </View>
  );
};

export default SongInfo;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 16,
    color: '#ffffff',
  },
});
