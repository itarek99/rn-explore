import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {PRIMARY_COLOR} from '../../../constants/colors';

const GameListItem = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Image source={data.poster} style={styles.image} />
        <View>
          <Text numberOfLines={1} style={styles.title}>
            {data.title}
          </Text>
          <Text style={styles.subtitle}>{data.subtitle}</Text>
        </View>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate('Details', {data});
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>
          {data.isFree === 'Yes' ? 'Play' : data.price}
        </Text>
      </Pressable>
    </View>
  );
};

export default GameListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    width: '50%',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    color: '#5a5a5a',
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 12,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
});
