import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BlogDetails = ({route}) => {
  const {item} = route.params;
  console.log(item);
  return (
    <View>
      <Text>BlogDetails</Text>
    </View>
  );
};

export default BlogDetails;

const styles = StyleSheet.create({});
