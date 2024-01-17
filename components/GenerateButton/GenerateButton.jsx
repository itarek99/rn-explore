import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const GenerateButton = ({options, setPassword, length}) => {
  const handleGeneratePassword = () => {
    const {includeUppercase, includeLowercase, includeNumbers, includeSymbols} =
      options;
    let charset = '';
    if (includeUppercase) {
      charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeLowercase) {
      charset += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (includeNumbers) {
      charset += '0123456789';
    }
    if (includeSymbols) {
      charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    }

    setPassword(generatePassword(+length, charset));
  };

  const generatePassword = (passwordLength, charset) => {
    let generatedPassword = '';

    for (let i = 0; i < passwordLength; i++) {
      let at = Math.floor(Math.random() * charset.length);
      generatedPassword += charset.charAt(at);
    }
    return generatedPassword;
  };
  return (
    <Pressable onPress={handleGeneratePassword} style={styles.generateBtn}>
      <Text style={styles.generateBtnText}>Generate Password</Text>
    </Pressable>
  );
};

export default GenerateButton;

const styles = StyleSheet.create({
  generateBtn: {
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    borderRadius: 6,
    marginTop: 28,
  },
  generateBtnText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});
