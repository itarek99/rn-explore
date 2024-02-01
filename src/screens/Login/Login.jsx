import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import Cover from '../../assets/svg/login.svg';
import {DARK_COLOR, PRIMARY_COLOR} from '../../constants/colors';
import {
  useGetOrUpdateUserMutation,
  useGetTokenMutation,
} from '../../features/user/userApi';
import {setUser} from '../../features/user/userSlice';
import {isValidEmail} from '../../utils/emaliValidation';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [getToken, {isLoading}] = useGetTokenMutation();
  const [getUserInfo, {isLoading: isLoadingUserInfo}] =
    useGetOrUpdateUserMutation();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (!email || !password) {
      Snackbar.show({
        text: 'Please fill all fields.',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#ef3b3b',
      });
      return;
    }

    if (!isValidEmail(email)) {
      Snackbar.show({
        text: 'Email is not valid.',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#ef3b3b',
      });
      return;
    }

    try {
      const result = await getToken({email, password}).unwrap();
      if (result.success) {
        await AsyncStorage.setItem('token', result.data.jwt);

        const userInfo = await getUserInfo({token: result.data.jwt}).unwrap();
        if (userInfo.id) {
          await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
          dispatch(
            setUser({
              token: result.data.jwt,
              userInfo,
            }),
          );
        }
      }
    } catch (error) {
      Snackbar.show({
        text: error.data.data.message,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#ef3b3b',
      });
    }
  };

  const handleNavigateToRegister = () => {
    navigation.navigate('Register');
  };

  if (isLoading || isLoadingUserInfo) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }
  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <SafeAreaView style={styles.container}>
            <View style={styles.loginImage}>
              <Cover width="90%" height={300} />
            </View>
            <View style={styles.loginFormContainer}>
              <View style={styles.formControl}>
                <FontAwesome name="envelope" size={18} color={DARK_COLOR} />
                <TextInput
                  autoCapitalize="none"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={value => {
                    setEmail(value);
                  }}
                  style={styles.textInput}
                  placeholder="Your Email"
                />
              </View>
              <View style={styles.formControl}>
                <FontAwesome name="lock" size={24} color={DARK_COLOR} />
                <TextInput
                  secureTextEntry={true}
                  value={password}
                  onChangeText={value => {
                    setPassword(value);
                  }}
                  style={styles.textInput}
                  placeholder="Password"
                />
                <Pressable>
                  <Text style={styles.forgotText}>Forgot?</Text>
                </Pressable>
              </View>
              <Pressable onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </Pressable>

              <View style={styles.noAccContainer}>
                <Text>Don't have an account? </Text>
                <Pressable onPress={handleNavigateToRegister}>
                  <Text style={styles.registerBtnText}>Register</Text>
                </Pressable>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  scrollView: {
    flex: 1,
  },
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },

  registerBtnText: {
    color: PRIMARY_COLOR,
    fontWeight: '500',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
