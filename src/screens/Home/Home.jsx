import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {products} from '../../data/products';
import ProductCard from './components/ProductCard';

const Home = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.container}
      data={products}
      renderItem={({item}) => <ProductCard product={item} />}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
