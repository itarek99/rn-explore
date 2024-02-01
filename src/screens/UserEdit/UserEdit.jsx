import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

import Snackbar from 'react-native-snackbar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {DARK_COLOR, PRIMARY_COLOR} from '../../constants/colors';
import {useGetOrUpdateUserMutation} from '../../features/user/userApi';
import {setUser} from '../../features/user/userSlice';

const UserEdit = ({navigation}) => {
  const user = useSelector(state => state.user);
  const [newUserInfo, setNewUserInfo] = useState({
    first_name: user.userInfo.first_name,
    last_name: user.userInfo.last_name,
  });
  const [updateUser, {}] = useGetOrUpdateUserMutation();
  const dispatch = useDispatch();
  const handleUpdateUser = async () => {
    try {
      const result = await updateUser({
        token: user.token,
        body: {
          ...newUserInfo,
          name: newUserInfo.first_name + ' ' + newUserInfo.last_name,
        },
      }).unwrap();

      if (result.id) {
        await AsyncStorage.setItem('userInfo', JSON.stringify(result));
        dispatch(setUser({userInfo: result, token: user.token}));
        Snackbar.show({
          text: 'Update user successfully.',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: '#1b98e0',
        });
        navigation.goBack();
      } else {
        Snackbar.show({
          text: 'User update failed.',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: '#ef3b3b',
        });
      }
    } catch (error) {
      Snackbar.show({
        text: 'User update failed.',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#ef3b3b',
      });
    }
  };
  const handleChangeText = (name, value) => {
    setNewUserInfo({...newUserInfo, [name]: value});
  };
  return (
    <View style={styles.container}>
      <View style={styles.formControl}>
        <FontAwesome name="user-o" size={22} color={DARK_COLOR} />
        <TextInput
          value={newUserInfo.first_name}
          onChangeText={text => handleChangeText('first_name', text)}
          style={styles.textInput}
          placeholder="First Name"
        />
      </View>
      <View style={styles.formControl}>
        <FontAwesome name="user-o" size={22} color={DARK_COLOR} />
        <TextInput
          value={newUserInfo.last_name}
          onChangeText={text => handleChangeText('last_name', text)}
          style={styles.textInput}
          placeholder="Last Name"
        />
      </View>
      <Pressable style={styles.button} onPress={handleUpdateUser}>
        <Text style={styles.buttonText}>Update</Text>
      </Pressable>
    </View>
  );
};

export default UserEdit;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  formControl: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#bdbdbd',
    marginBottom: 20,
  },

  textInput: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 10,
    fontSize: 16,
    color: DARK_COLOR,
  },

  button: {
    backgroundColor: PRIMARY_COLOR,
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
