// src/navigation/userStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import { AppScreens } from '../types';
import ShiftsScreen from '../screens/ShiftsScreen';
import ChatScreen from '../screens/ChatScreen';
import OptionScreen from '../screens/OptionScreen';

const Stack = createBottomTabNavigator<AppScreens>();

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown :false}} />
      <Stack.Screen name="Shifts" component={ShiftsScreen} options={{headerShown :false}} />
      <Stack.Screen name="Chat" component={ChatScreen} options={{headerShown :false}} />
      <Stack.Screen name="Option" component={OptionScreen} options={{headerShown :false}} />

    </Stack.Navigator>
  );
};

export default UserStack;
