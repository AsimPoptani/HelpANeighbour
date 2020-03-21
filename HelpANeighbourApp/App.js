/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation'

const App: () => React$Node = () => {
  return (<>
    {/* Our navigation */}
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
    </>
  );
};

export default App;
