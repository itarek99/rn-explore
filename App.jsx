import React, {useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import GenerateButton from './components/GenerateButton/GenerateButton';
import LengthInput from './components/LengthInput/LengthInput';
import LengthSlider from './components/LengthSlider/LengthSlider';
import PasswordOptions from './components/PasswordOptions/PasswordOptions';
import PasswordView from './components/PasswordView/PasswordView';

const image = {
  uri: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2757&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

const App = () => {
  const [length, setLength] = useState('5');
  const [password, setPassword] = useState('');
  const [options, setOptions] = useState({
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.card}>
          <Text style={styles.title}>Password Generator</Text>
          <LengthInput length={length} />
          <LengthSlider length={length} setLength={setLength} />
          <PasswordOptions options={options} setOptions={setOptions} />
          <GenerateButton
            options={options}
            setPassword={setPassword}
            length={length}
          />
          <PasswordView password={password} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6c6c6c',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffffe6',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000000',
  },
});

export default App;
