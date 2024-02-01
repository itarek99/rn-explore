import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import Cover from '../../assets/svg/register.svg';
import {DARK_COLOR, PRIMARY_COLOR} from '../../constants/colors';
import {
  useGetOrUpdateUserMutation,
  useRegisterUserMutation,
} from '../../features/user/userApi';
import {setUser} from '../../features/user/userSlice';
import {isValidEmail} from '../../utils/emaliValidation';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [registerUser, {}] = useRegisterUserMutation();
  const [getUserInfo, {}] = useGetOrUpdateUserMutation();
  const [newUserInfo, setNewUserInfo] = useState({
    user_login: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const handleChangeText = (name, value) => {
    setNewUserInfo({...newUserInfo, [name]: value});
  };

  const handleRegister = async () => {
    if (
      !newUserInfo.user_login ||
      !newUserInfo.first_name ||
      !newUserInfo.last_name ||
      !newUserInfo.email ||
      !newUserInfo.password
    ) {
      Snackbar.show({
        text: 'Please fill all fields.',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#ef3b3b',
      });
      return;
    }

    if (!isValidEmail(newUserInfo.email)) {
      Snackbar.show({
        text: 'Email is not valid.',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#ef3b3b',
      });
      return;
    }

    try {
      const result = await registerUser(newUserInfo).unwrap();
      if (result.success) {
        const userInfo = await getUserInfo({token: result.jwt}).unwrap();
        await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        await AsyncStorage.setItem('token', JSON.stringify(result.jwt));
        dispatch(
          setUser({
            token: result.jwt,
            userInfo,
          }),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNavigateToRegister = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.loginImage}>
          <Cover width="90%" height={300} />
        </View>
        <View style={styles.loginFormContainer}>
          <View style={styles.formControl}>
            <FontAwesome name="id-badge" size={24} color={DARK_COLOR} />
            <TextInput
              autoCapitalize="none"
              value={newUserInfo.user_login}
              onChangeText={text => handleChangeText('user_login', text)}
              style={styles.textInput}
              placeholder="Username"
            />
          </View>
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
          <View style={styles.formControl}>
            <FontAwesome name="envelope-o" size={20} color={DARK_COLOR} />
            <TextInput
              autoCapitalize="none"
              textContentType="emailAddress"
              keyboardType="email-address"
              value={newUserInfo.email}
              onChangeText={text => handleChangeText('email', text)}
              style={styles.textInput}
              placeholder="Email"
            />
          </View>
          <View style={styles.formControl}>
            <FontAwesome name="asterisk" size={22} color={DARK_COLOR} />
            <TextInput
              secureTextEntry
              value={newUserInfo.password}
              onChangeText={text => handleChangeText('password', text)}
              style={styles.textInput}
              placeholder="Password"
            />
          </View>

          <Pressable onPress={handleRegister} style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>

          <View style={styles.noAccContainer}>
            <Text>Already have an account? </Text>
            <Pressable onPress={handleNavigateToRegister}>
              <Text style={styles.registerBtnText}>Login</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },

  scrollViewContainer: {
    width: '100%',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: DARK_COLOR,
    marginTop: 20,
  },

  loginImage: {
    width: '100%',
    height: 300,
    paddingHorizontal: 16,
  },

  loginFormContainer: {
    width: '100%',
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

  forgotText: {
    color: PRIMARY_COLOR,
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 'auto',
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

  noAccContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },

  registerBtnText: {
    color: PRIMARY_COLOR,
    fontWeight: '500',
  },
});
