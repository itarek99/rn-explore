import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Blog from '../screens/Blog/Blog';
import BlogDetails from '../screens/BlogDetails/BlogDetails';

const Stack = createNativeStackNavigator();

const BlogStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Blogs" component={Blog} />
      <Stack.Screen
        name="BlogDetails"
        component={BlogDetails}
        options={({route}) => ({
          title: route.params.item.title.rendered,
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default BlogStack;
