import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BlogStack from './BlogStack';
import UserStack from './UserStack';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  const renderTabIcon = (name, color, size) => (
    <FontAwesome name={name} color={color} size={size} />
  );

  return (
    <Tab.Navigator
      initialRouteName="BlogStack"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => renderTabIcon('list-alt', color, size),
        }}
        name="BlogStack"
        component={BlogStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => renderTabIcon('user', color, size),
        }}
        name="UserStack"
        component={UserStack}
      />
    </Tab.Navigator>
  );
};

export default AppTabs;
