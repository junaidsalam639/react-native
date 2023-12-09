/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text } from 'react-native';
import MyStack from './navigate';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
   <>
   <NavigationContainer>
    <MyStack />
   </NavigationContainer>
   </>
  );
}



export default App;


