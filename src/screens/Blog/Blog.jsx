import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useGetPostsQuery} from '../../features/post/postApi';
import BlogCard from './components/BlogCard';

const Blog = () => {
  const {data, isLoading, refetch} = useGetPostsQuery();

  const onRefresh = useCallback(() => {
    refetch();
  }, []);

  const renderSeparatorComponent = () => {
    return <View style={styles.separatorHeight} />;
  };

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        onRefresh={onRefresh}
        refreshing={isLoading}
        contentContainerStyle={styles.contentContainerStyle}
        data={data}
        renderItem={({item}) => <BlogCard item={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSeparatorComponent}
      />
    </View>
  );
};

export default Blog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainerStyle: {
    padding: 16,
  },

  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  separatorHeight: {
    height: 12,
  },
});
