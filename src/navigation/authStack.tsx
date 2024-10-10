
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUp';
import SignInScreen from '../screens/SignIn';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
              <Stack.Screen name="SignUp" component={SignUpScreen}  />

      <Stack.Screen name="SignIn" component={SignInScreen} initialParams={{ email: null }}/>
    </Stack.Navigator>
  );
};

export default AuthStack;
