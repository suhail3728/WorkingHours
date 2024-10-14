// src/navigation/userStack.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../screens/Home';
import ShiftsScreen from '../screens/ShiftsScreen';
import ChatScreen from '../screens/ChatScreen';
import OptionScreen from '../screens/OptionScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native';
import Colors from '../constants/colors';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator
    
  screenOptions={{
    tabBarShowLabel: false,
    tabBarIconStyle: { color: Colors.darkGray }, 
    tabBarShowLabel: false,
    tabBarActiveTintColor: Colors.orange,  // Color for the active tab
    tabBarInactiveTintColor: Colors.darkGray,// replace 'blue' with your desired color
  }}
    >
    <Tab.Screen name="Home" component={HomeScreen} options={{headerShown :false,
         tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="alarm" color={color} size={size} />
        ),}} />
      <Tab.Screen name="Shifts" component={ShiftsScreen} options={{headerShown :false,
         tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="calendar-blank-outline" color={color} size={size} />
        ),
         
         }} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{headerShown :false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat-outline" color={color} size={size} />
          ),
      }} />
      <Tab.Screen name="Option" component={OptionScreen} options={{headerShown :false,
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="menu" color={color} size={size} />
      ),
        
      }} />
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
