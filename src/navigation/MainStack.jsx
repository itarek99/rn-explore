import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../features/user/userSlice';
import AppTabs from './AppTabs';
import AuthStack from './AuthStack';

const MainStack = () => {
  const [loadingUi, setLoadingUi] = useState(false);
  const userInfo = useSelector(state => state.user.userInfo);
  const dispatch = useDispatch();

  const handleGetUserInfo = async () => {
    setLoadingUi(true);
    try {
      const savedUserInfo = await AsyncStorage.getItem('userInfo');
      const savedToken = await AsyncStorage.getItem('token');

      if (savedUserInfo && savedToken) {
        dispatch(
          setUser({
            userInfo: JSON.parse(savedUserInfo),
            token: savedToken,
          }),
        );
      }
      setLoadingUi(false);
    } catch (error) {
      Snackbar.show({
        text: 'Cannot get user info.',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#ef3b3b',
      });
      setLoadingUi(false);
    } finally {
      setLoadingUi(false);
    }
  };

  useEffect(() => {
    handleGetUserInfo();
  }, []);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {userInfo ? <AppTabs /> : <AuthStack />}
      </NavigationContainer>
      <Modal
        transparent
        animationType="fade"
        visible={loadingUi}
        onRequestClose={() => {}}>
        <View style={styles.modalContainer}>
          <ActivityIndicator size="large" color="#000000" />
        </View>
      </Modal>
    </View>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});
