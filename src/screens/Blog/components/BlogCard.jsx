import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const BlogCard = ({item}) => {
  const navigation = useNavigation();
  const handleFullView = () => {
    navigation.navigate('BlogDetails', {item});
  };
  return (
    <Pressable onPress={handleFullView}>
      <View style={styles.card}>
        <Text style={styles.title}>{item.title.rendered}</Text>
        <Text style={styles.content}>{item.content.rendered}</Text>
      </View>
    </Pressable>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
  },
});
