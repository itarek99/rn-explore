import Slider from '@react-native-community/slider';
import React, {useState} from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';

const image = {
  uri: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2757&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

const App = () => {
  const [value, onChangeText] = useState('5');

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.card}>
          <Text style={styles.title}>Password Generator</Text>
          <View style={styles.label}>
            <Text style={styles.labelText}>Length</Text>
            <TextInput
              value={value}
              readOnly
              style={styles.labelInput}
              keyboardType="number-pad"
            />
          </View>
          <Slider
            onValueChange={currentValue => {
              onChangeText(Math.floor(currentValue).toString());
            }}
            minimumValue={5}
            maximumValue={100}
            value={+value}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffffd5',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },

  labelText: {
    fontSize: 16,
    color: '#000000',
  },
  labelInput: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
    width: 50,
  },
});

export default App;
