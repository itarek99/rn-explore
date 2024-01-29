import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import User from '../screens/User/User';
import BlogStack from './BlogStack';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={BlogStack} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
