// src/navigation/userStack.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import ShiftsScreen from '../screens/ShiftsScreen';
import ChatScreen from '../screens/ChatScreen';
import OptionScreen from '../screens/OptionScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/colors';
import Departments from '../screens/Departments';
import EditDepartments from '../screens/EditDepartments';
import MyTeamScreen from '../screens/MyteamScreen';
import AddMember from '../screens/AddMember';
import AddRole from '../screens/AddRole';

import { View, Text, TouchableOpacity } from 'react-native';
import AddDepartment from '../screens/AddDepartment';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const OptionsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Option">
      <Stack.Screen name="Departments" component={Departments} options={{headerShown:false}}/>
      <Stack.Screen
        name="Option"
        component={OptionScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen name="EditDepartments" component={EditDepartments} options={{
        title:'Company Settings',
        headerStyle:{
     

        },
        headerRight: () => (
          <TouchableOpacity>
            <View style={{paddingRight:20}}>
              <Text style={{color:Colors.black, }}>DONE</Text>
            </View>
          </TouchableOpacity> 
        ),
        }} />
      <Stack.Screen name="MyTeam" component={MyTeamScreen} />
      <Stack.Screen name="AddMember" component={AddMember} options={{headerShown:false}} />
      <Stack.Screen name="AddRole" component={AddRole} options={{headerShown:false}}/>
      <Stack.Screen
  name="AddDepartment"
  component={AddDepartment}
  options={{headerShown:false}}
/>


    </Stack.Navigator>
  );
};

function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarIconStyle: {color: Colors.darkGray},
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.orange,
        tabBarInactiveTintColor: Colors.darkGray,
        keyboardHidesTabBar: true,
        tabBarStyle: {
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="alarm" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Shifts"
        component={ShiftsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="calendar-blank-outline"
              color={color}
              size={size}
              style={{fontWeight: '100'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="chat-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Options"
        component={OptionsStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default UserStack;
