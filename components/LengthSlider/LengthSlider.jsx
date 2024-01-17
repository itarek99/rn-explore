import Slider from '@react-native-community/slider';
import React from 'react';

const LengthSlider = ({length, setLength}) => {
  return (
    <Slider
      onValueChange={currentValue => {
        setLength(Math.floor(currentValue).toString());
      }}
      minimumValue={5}
      maximumValue={100}
      value={+length}
      minimumTrackTintColor="#FFFFFF"
      maximumTrackTintColor="#000000"
    />
  );
};

export default LengthSlider;
