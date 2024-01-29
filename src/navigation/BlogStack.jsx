import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Blog from '../screens/Blog/Blog';
import BlogDetails from '../screens/BlogDetails/BlogDetails';

const Stack = createNativeStackNavigator();

const BlogStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="BlogDetails" component={BlogDetails} />
    </Stack.Navigator>
  );
};

export default BlogStack;
