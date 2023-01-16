import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from './screens/HomeStack';
import {RootParamList} from './types/paramlists';

const Stack = createNativeStackNavigator<RootParamList>();

export default function RootNavigator() {
  function renderScreens() {
    return <Stack.Screen name={'HomeStack'} component={HomeStack} />;
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {renderScreens()}
    </Stack.Navigator>
  );
}
