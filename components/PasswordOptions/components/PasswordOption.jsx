import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const PasswordOption = ({options, setOptions, type, label}) => {
  return (
    <View style={styles.optionItem}>
      <CheckBox
        onValueChange={value => {
          if (
            Object.values(options).filter(option => option === true).length ===
              1 &&
            value === false
          ) {
            return;
          }

          setOptions({...options, [type]: value});
        }}
        value={options[type]}
        style={styles.checkBox}
      />
      <Pressable
        onPress={() => {
          if (
            Object.values(options).filter(option => option === true).length ===
              1 &&
            options[type] === true
          ) {
            return;
          }
          setOptions({...options, [type]: !options[type]});
        }}>
        <Text style={styles.optionItemLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default PasswordOption;

const styles = StyleSheet.create({
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    gap: 10,
  },
  checkBox: {
    width: 22,
    height: 22,
  },
  optionItemLabel: {
    fontSize: 16,
    color: '#000000',
  },
});
