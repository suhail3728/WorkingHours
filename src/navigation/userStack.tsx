// src/navigation/userStack.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import { AppScreens, } from '../types';
import ShiftsScreen from '../screens/ShiftsScreen';
import ChatScreen from '../screens/ChatScreen';
import OptionScreen from '../screens/OptionScreen';

const Tab = createBottomTabNavigator<AppScreens>();

const UserStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown :false}} />
      <Tab.Screen name="Shifts" component={ShiftsScreen} options={{headerShown :false}} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{headerShown :false}} />
      <Tab.Screen name="Option" component={OptionScreen} options={{headerShown :false}} />

    </Tab.Navigator>
  );
};

export default UserStack;
