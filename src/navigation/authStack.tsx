
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUp';
import SignInScreen from '../screens/SignIn';
import WelcomeScreen from '../screens/WelcomeScreen';
import UserCreation1 from '../screens/UserCreation1';
import UserCreation2 from '../screens/UserCreation2';
import UserCreation3 from '../screens/UserCreation3';


import NewUserScreen from '../screens/NewUserScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='WelcomScreen'>
                    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}  options={{headerShown: false}} />
                    <Stack.Screen name="NewUser" component={NewUserScreen}  options={{headerShown: false}} />

                    <Stack.Screen name="UserCreation1" component={UserCreation1}       options={{ title: 'Step 1 of 4'}} />
                    <Stack.Screen name="UserCreation2" component={UserCreation2}       options={{ title: 'Step 2 of 4'}} />

                    <Stack.Screen name="UserCreation3" componenType '({ route, navigation }: UserCreation3Props) => Element' is not assignable to type 'ScreenComponentType<ParamListBase, "UserCreation3"> | undefined'.
                    t={UserCreation3}       options={{ title: 'Step 3 of 4'}} />


              <Stack.Screen name="SignUp" component={SignUpScreen}  />

      <Stack.Screen name="SignIn" component={SignInScreen} initialParams={{ email: null }}/>
    </Stack.Navigator>
  );
};

export default AuthStack;
