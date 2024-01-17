import React from 'react';
import {View} from 'react-native';
import PasswordOption from './components/PasswordOption';

const PasswordOptions = ({options, setOptions}) => {
  return (
    <View>
      <PasswordOption
        type="includeUppercase"
        options={options}
        setOptions={setOptions}
        label="Include uppercase letters (A-Z)"
      />
      <PasswordOption
        type="includeLowercase"
        options={options}
        setOptions={setOptions}
        label="Include lowercase letters (a-z)"
      />
      <PasswordOption
        type="includeNumbers"
        options={options}
        setOptions={setOptions}
        label="Include numbers (0-9)"
      />
      <PasswordOption
        type="includeSymbols"
        options={options}
        setOptions={setOptions}
        label="Include symbols (!@#$%^&*)"
      />
    </View>
  );
};

export default PasswordOptions;
