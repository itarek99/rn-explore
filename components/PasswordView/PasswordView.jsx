import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PasswordView = ({password}) => {
  return (
    <View style={styles.passwordContainer}>
      <Text selectable style={styles.password}>
        {password ? password : 'Click on Generate Button'}
      </Text>
    </View>
  );
};

export default PasswordView;

const styles = StyleSheet.create({
  passwordContainer: {
    marginTop: 12,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 6,
    marginBottom: 6,
  },
  password: {
    color: '#1e1e1e',
    fontSize: 16,
    textAlign: 'center',
  },
});
