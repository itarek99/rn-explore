import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import UserEdit from '../screens/UserEdit/UserEdit';
import UserInfo from '../screens/UserInfo/UserInfo';

const Stack = createNativeStackNavigator();
const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserInfo"
        options={{
          title: 'My Profile',
          headerBackTitleVisible: false,
        }}
        component={UserInfo}
      />
      <Stack.Screen
        name="UserEdit"
        options={{
          title: 'Edit Profile',
          headerBackTitleVisible: false,
        }}
        component={UserEdit}
      />
    </Stack.Navigator>
  );
};

export default UserStack;
