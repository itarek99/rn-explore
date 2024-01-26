import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LoginImage from '../../assets/svgs/register_alt.svg';
import {DARK_COLOR, PRIMARY_COLOR} from '../../constants/colors';

const Register = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleRegister = () => {
    navigation.navigate('Home');
  };

  const handleNavigateToRegister = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginImage}>
        <LoginImage width="90%" height={300} />
      </View>
      <View style={styles.loginFormContainer}>
        <View style={styles.formControl}>
          <FontAwesome name="user" size={22} color={DARK_COLOR} />
          <TextInput style={styles.textInput} placeholder="Full Name" />
        </View>
        <View style={styles.formControl}>
          <FontAwesome name="envelope" size={18} color={DARK_COLOR} />
          <TextInput style={styles.textInput} placeholder="Email" />
        </View>
        <View style={styles.formControl}>
          <FontAwesome name="lock" size={24} color={DARK_COLOR} />
          <TextInput style={styles.textInput} placeholder="Password" />
        </View>
        <View style={styles.formControl}>
          <FontAwesome name="calendar" size={18} color={DARK_COLOR} />
          <TextInput
            value={date.toDateString()}
            onFocus={() => {
              setOpen(true);
            }}
            style={styles.textInput}
            placeholder="Password"
          />

          <DatePicker
            mode="date"
            modal
            open={open}
            date={date}
            onConfirm={selected => {
              setOpen(false);
              setDate(selected);
            }}
            onCancel={() => {
              setOpen(false);
            }}
            maximumDate={new Date()}
            minimumDate={new Date(1990, 1, 1)}
          />
        </View>
        <Pressable onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <View style={styles.noAccContainer}>
          <Text>Already have an account? </Text>
          <Pressable onPress={handleNavigateToRegister}>
            <Text style={styles.registerBtnText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
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
});
