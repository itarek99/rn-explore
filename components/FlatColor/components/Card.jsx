import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Card = ({title, backgroundColor}) => {
  return (
    <View style={[styles.cardBody, {backgroundColor}]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBody: {
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    borderRadius: 6,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Card;
