import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <FontAwesome name="chevron-left" size={20} color="#ffffff" />
    </Pressable>
  );
};

export default HeaderLeft;
