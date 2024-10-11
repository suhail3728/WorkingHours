
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUp';
import SignInScreen from '../screens/SignIn';
import WelcomeScreen from '../screens/WelcomeScreen';
import UserCreation1 from '../screens/UserCreation1';
import NewUserScreen from '../screens/NewUserScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='WelcomScreen'>
                    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}  options={{headerShown: false}} />
                    <Stack.Screen name="NewUser" component={NewUserScreen}  options={{headerShown: false}} />

                    <Stack.Screen name="UserCreation1" component={UserCreation1}  />

              <Stack.Screen name="SignUp" component={SignUpScreen}  />

      <Stack.Screen name="SignIn" component={SignInScreen} initialParams={{ email: null }}/>
    </Stack.Navigator>
  );
};

export default AuthStack;
