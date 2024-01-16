import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function ImageCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Card</Text>
      <View style={styles.card}>
        <Image
          resizeMode="cover"
          style={styles.cardImage}
          src="https://images.unsplash.com/photo-1705107959309-ca7d26fbeb08?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>New Monster In Town</Text>
          <Text style={styles.cardDescription}>
            Compatible with 35mm color or black and white film, this camera
            allows you to quickly capture candid snapshots as well as portraits
            and moody monochrome scenes.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    borderColor: '#9e9e9e',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardBody: {
    padding: 10,
  },
  cardImage: {
    height: 160,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 15,
    marginTop: 5,
    color: '#454545',
  },
});
