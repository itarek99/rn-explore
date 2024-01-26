import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {DARK_COLOR, PRIMARY_COLOR} from '../constants/colors';
import Cart from '../screens/Cart/Cart';
import Details from '../screens/Details/Details';
import Home from '../screens/Home/Home';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({route}) => ({
          title: route.params.data.title,
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};

const MainTabs = () => {
  const renderIcon = (iconName, color) => {
    return <FontAwesome name={iconName} size={24} color={color} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: PRIMARY_COLOR,
        tabBarInactiveTintColor: DARK_COLOR,
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen
        options={({route}) => ({
          tabBarIcon: ({color}) => renderIcon('home', color),
          tabBarStyle: {
            display: showTabBar(route) ? 'flex' : 'none',
          },
        })}
        name="HomeTab"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: '#e36218',
          },
          tabBarIcon: ({color}) => renderIcon('shopping-cart', color),
        }}
        name="Cart"
        component={Cart}
      />
    </Tab.Navigator>
  );
};

const showTabBar = route => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (routeName === 'Details') {
    return false;
  }
  return true;
};

export default MainTabs;
