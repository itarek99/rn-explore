import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomDrawer from '../components/CustomDrawer';
import {PRIMARY_COLOR} from '../constants/colors';
import Settings from '../screens/Settings/Settings';
import AuthStack from './AuthStack';
import MainTabs from './MainTabs';

const Drawer = createDrawerNavigator();
const AppStack = () => {
  const renderCustomDrawer = props => {
    return <CustomDrawer {...props} />;
  };
  const renderDrawerIcon = (type, color) => {
    return <FontAwesome name={type} size={20} color={color} />;
  };
  return (
    <Drawer.Navigator
      drawerContent={props => renderCustomDrawer(props)}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: PRIMARY_COLOR,
        drawerActiveTintColor: '#ffffff',
        drawerInactiveBackgroundColor: '#eaeaea',
        drawerInactiveTintColor: '#323232',
        drawerLabelStyle: {
          fontSize: 16,
          marginLeft: -22,
        },
        drawerItemStyle: {
          marginVertical: 4,
          paddingLeft: 6,
        },
      }}>
      <Drawer.Screen
        name="MainTabs"
        component={MainTabs}
        options={{
          drawerIcon: ({color}) => renderDrawerIcon('home', color),
          title: 'Home',
        }}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => renderDrawerIcon('user', color),
          title: 'Profile',
        }}
        name="AuthStack"
        component={AuthStack}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => renderDrawerIcon('cog', color),
        }}
        name="Settings"
        component={Settings}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
