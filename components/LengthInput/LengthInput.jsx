import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const LengthInput = ({length}) => {
  return (
    <View style={styles.label}>
      <Text style={styles.labelText}>Length</Text>
      <TextInput
        value={length}
        readOnly
        style={styles.labelInput}
        keyboardType="number-pad"
      />
    </View>
  );
};

export default LengthInput;

const styles = StyleSheet.create({
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
    textAlign: 'center',
  },
});
