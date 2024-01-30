import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BlogStack from './BlogStack';
import UserStack from './UserStack';

const Tab = createBottomTabNavigator();

const TabIcon = ({name, color, size}) => {
  return <FontAwesome name={name} color={color} size={size} />;
};

const AppStack = () => {
  const renderTabIcon =
    name =>
    ({color, size}) => {
      return <FontAwesome name={name} color={color} size={size} />;
    };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: renderTabIcon('list-alt'),
        }}
        name="BlogStack"
        component={BlogStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: renderTabIcon('user'),
        }}
        name="UserStack"
        component={UserStack}
      />
    </Tab.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
