import React from 'react';
import {Image, Linking, Pressable, StyleSheet, Text, View} from 'react-native';

export default function ImageCard() {
  const handleBuy = () => {
    Linking.openURL(
      'https://www.amazon.com/Canon-1-4x-Extender-Telephoto-Cameras/dp/B00009R6WO',
    );
  };
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
          <Text style={styles.cardTitle}>Red Vapor XII</Text>
          <Text style={styles.cardLabel}>Film Camera</Text>
          <Text style={styles.cardDescription}>
            This camera allows you to quickly capture candid snapshots as well
            as portraits and moody monochrome scenes.
          </Text>
          <View style={styles.cardFooter}>
            <View style={styles.cardPrice}>
              <Text style={styles.cardPriceTag}>Price: </Text>
              <Text style={styles.cardPriceValue}>$9999.49</Text>
            </View>
            <View>
              <Pressable style={styles.buyBtn}>
                <Text onPress={handleBuy} style={styles.buyBtnText}>
                  Buy Now
                </Text>
              </Pressable>
            </View>
          </View>
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardLabel: {
    fontSize: 14,
    color: '#838383',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
    color: '#454545',
  },
  cardFooter: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardPriceTag: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardPriceValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buyBtn: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
  },

  buyBtnText: {
    color: '#fff',
  },
});
