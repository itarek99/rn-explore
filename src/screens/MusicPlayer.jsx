import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import TrackPlayer, {
  Event,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import ControlCenter from '../components/ControlCenter';
import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';

const MusicPlayer = () => {
  const [track, setTrack] = useState(null);

  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
    switch (event.type) {
      case Event.PlaybackActiveTrackChanged:
        const index = await TrackPlayer.getActiveTrackIndex();
        const currentTrack = await TrackPlayer.getTrack(index);
        setTrack(currentTrack);
        break;
      default:
        break;
    }
  });

  useEffect(() => {
    const setup = async () => {
      const index = await TrackPlayer.getActiveTrackIndex();
      if (index !== null) {
        const currentTrack = await TrackPlayer.getTrack(index);
        setTrack(currentTrack);
      }
    };
    setup();
  }, []);
  const renderArtwork = () => {
    if (track === null) {
      return null;
    }
    return (
      <View style={styles.artworkContainer}>
        <Image
          style={styles.artwork}
          source={{
            uri: track?.artwork.toString(),
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderArtwork()}
      <SongInfo track={track} />
      <SongSlider />
      <ControlCenter />
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  artworkContainer: {
    margin: 20,
    alignItems: 'center',
    borderRadius: 1000,
    overflow: 'hidden',
  },
  artwork: {
    width: '100%',
    aspectRatio: 1,
  },
});
