import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import five from './assets/Five.png';
import four from './assets/Four.png';
import one from './assets/One.png';
import six from './assets/Six.png';
import three from './assets/Three.png';
import two from './assets/Two.png';

const App = () => {
  const data = {
    1: one,
    2: two,
    3: three,
    4: four,
    5: five,
    6: six,
  };

  const [dice, setDice] = useState(1);

  useEffect(() => {
    setDice(Math.floor(Math.random() * 6) + 1);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.diceContainer}>
          <Image style={styles.dice} source={data[dice]} />
        </View>
        <Pressable
          style={styles.rollButton}
          onPress={() => {
            setDice(Math.floor(Math.random() * 6) + 1);
          }}>
          <Text style={styles.rollButtonText}>Roll The Dice</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  rollButton: {
    backgroundColor: '#000',
    paddingVertical: 16,
    paddingHorizontal: 36,
    borderRadius: 6,
    marginTop: 20,
  },
  rollButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
