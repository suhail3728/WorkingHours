// src/navigation/userStack.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import ShiftsScreen from '../screens/ShiftsScreen';
import ChatScreen from '../screens/ChatScreen';
import OptionScreen from '../screens/OptionScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} options={{headerShown :false}} />
      <Tab.Screen name="Shifts" component={ShiftsScreen} options={{headerShown :false}} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{headerShown :false}} />
      <Tab.Screen name="Option" component={OptionScreen} options={{headerShown :false}} />
    </Tab.Navigator>
  );
}
const UserStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{ headerShown: false }}
        />
          </Stack.Navigator>
  );
};

export default UserStack;
