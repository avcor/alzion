import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import HomeScreen, { schema } from './src/Screens/HomeScreen';
import DetailScreen from './src/Screens/DetailScreen';

// type Stack
export type RootStack = {
  navigate(arg0: string): unknown;
  'Home': any,
  'Detail': any,
}

function App(): React.JSX.Element {

  const Stack = createNativeStackNavigator<RootStack>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Detail' component={DetailScreen}
          initialParams={{ data: {} as schema }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
