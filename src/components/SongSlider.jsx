import Slider from '@react-native-community/slider';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useProgress} from 'react-native-track-player';

const SongSlider = () => {
  const {position, duration} = useProgress();
  return (
    <View style={styles.container}>
      <Slider
        maximumTrackTintColor="#ffffff"
        value={position}
        minimumValue={0}
        maximumValue={duration}
      />
      <View style={styles.timeWrapper}>
        <View>
          <Text style={styles.timeText}>
            {new Date(position * 1000).toISOString().substring(15, 19)}
          </Text>
        </View>
        <View>
          <Text style={styles.timeText}>
            {new Date((duration - position) * 1000)
              .toISOString()
              .substring(15, 19)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SongSlider;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  timeText: {
    color: '#ffffff',
  },
  timeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
  },
});
