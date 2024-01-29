import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useGetPostsQuery} from '../../features/post/postApi';
import BlogCard from './components/BlogCard';

const Blog = () => {
  const {data, isLoading} = useGetPostsQuery();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <BlogCard item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Blog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
