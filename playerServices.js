import TrackPlayer, {Event, RepeatMode} from 'react-native-track-player';
import {playListData} from './src/data';

export async function setupPlayer() {
  let isInit = false;
  try {
    await TrackPlayer.getActiveTrackIndex();
    isInit = true;
  } catch (e) {
    await TrackPlayer.setupPlayer();
    isInit = true;
  } finally {
    return isInit;
  }
}

export async function addTrack() {
  await TrackPlayer.add(playListData);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

const playerService = async () => {
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.RemoteStop, () => {
    TrackPlayer.destroy();
  });

  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    TrackPlayer.skipToPrevious();
  });
};

export default playerService;
