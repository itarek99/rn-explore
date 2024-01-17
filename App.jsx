import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#292929');
  const handleBgColorChange = () => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(color);
  };

  useEffect(() => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(color);
  }, []);

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.colorContainer}>
        <Text selectable style={styles.color}>
          {backgroundColor}
        </Text>
      </View>
      <Pressable onPress={handleBgColorChange} style={styles.changeButton}>
        <Text style={styles.buttonText}>Change Background Color</Text>
      </Pressable>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },

  colorContainer: {
    marginBottom: 12,
    borderRadius: 5,
    backgroundColor: '#000000',
    width: 160,
  },

  color: {
    color: '#ffffff',
    fontSize: 18,
    paddingHorizontal: 30,
    paddingVertical: 16,
    textAlign: 'center',
  },
});
