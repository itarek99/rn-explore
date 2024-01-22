import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ControlCenter = () => {
  const {state} = usePlaybackState();

  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const togglePlayback = async playback => {
    const currentTrackIndex = await TrackPlayer.getActiveTrackIndex();
    const currentTrack = await TrackPlayer.getTrack(currentTrackIndex);
    if (currentTrack !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <Pressable style={styles.controlButton} onPress={skipToPrevious}>
          <FontAwesome name="backward" color="#ffffff" size={40} />
        </Pressable>

        <Pressable
          style={styles.mainButton}
          onPress={() => togglePlayback(state)}>
          <FontAwesome
            name={state === State.Playing ? 'pause' : 'play'}
            color="#ffffff"
            size={70}
          />
        </Pressable>

        <Pressable onPress={skipToNext}>
          <FontAwesome name="forward" color="#ffffff" size={40} />
        </Pressable>
      </View>
    </View>
  );
};

export default ControlCenter;

const styles = StyleSheet.create({
  container: {
    margin: 40,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  controlButton: {},

  mainButton: {
    width: 80,
    alignItems: 'center',
  },
});
