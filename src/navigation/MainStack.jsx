import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../features/user/userSlice';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const MainStack = () => {
  const [loadingUi, setLoadingUi] = useState(true);
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
      console.log(error);
      setLoadingUi(false);
    }
  };

  useEffect(() => {
    handleGetUserInfo();
  }, []);

  if (loadingUi) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userInfo ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
