import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {clearUser} from '../../features/user/userSlice';

const UserInfo = ({navigation}) => {
  const userInfo = useSelector(state => state.user.userInfo);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('userInfo');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.userName}>{userInfo.name}</Text>
        <Text style={styles.email}>{userInfo.email}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.editProfile}
          onPress={() => {
            navigation.navigate('UserEdit');
          }}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </Pressable>
      </View>
      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <FontAwesome name="sign-out" size={20} color="red" />
      </Pressable>
    </SafeAreaView>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  email: {
    fontSize: 16,
  },

  buttonContainer: {
    alignItems: 'center',
    marginTop: 12,
    gap: 12,
  },

  editProfile: {
    backgroundColor: '#1156e0',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 16,
  },

  buttonText: {
    color: '#ffffff',
  },

  logoutButton: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
});
