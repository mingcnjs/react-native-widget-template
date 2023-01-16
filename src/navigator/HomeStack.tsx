import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../types/paramlists';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
    </Stack.Navigator>
  );
}
