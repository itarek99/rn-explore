import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

const ProductCard = ({product}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Details', {product});
      }}>
      <View style={styles.container}>
        <Image style={styles.image} src={product.imageUrl} />
        <View>
          <Text>{product.name}</Text>

          <Text>{product.originalPrice}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    width: '100%',
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 70,
    height: 90,
    resizeMode: 'contain',
  },
});
