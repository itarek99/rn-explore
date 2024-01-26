import '../ignoreWarnings';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppStack from './navigation/AppStack';

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
};

export default App;
