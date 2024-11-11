
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/signIn';
import WelcomeScreen from '../screens/WelcomeScreen';
import UserCreation1 from '../screens/UserCreation1';
import UserCreation2 from '../screens/UserCreation2';
import UserCreation3 from '../screens/UserCreation3';
import NewUserScreen from '../screens/NewUserScreen';
import UserCreation4 from '../screens/UserCreation4';
import EmployeeLogin from '../screens/EmployeeLogin';
import EmployeeCreate from '../screens/EmployeeCreate';
import Colors from '../constants/colors';
const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
                    <Stack.Screen name="Welcome" component={WelcomeScreen}  options={{headerShown: false}} />
                    <Stack.Screen name="NewUser" component={NewUserScreen}  options={{headerShown: false}} />
                    <Stack.Screen name="Employee" component={EmployeeLogin}  options={{headerShown: false}} />
                    <Stack.Screen name="EmplyCreate" component={EmployeeCreate}  options={{headerShown: false}} />
                    <Stack.Screen name="UserCreation1" component={UserCreation1}       options={{ title: 'Step 1 of 4'}} />
                    <Stack.Screen name="UserCreation2" component={UserCreation2}       options={{ title: 'Step 2 of 4'}} />
                    <Stack.Screen name="UserCreation3" component={UserCreation3}       options={{ title: 'Step 3 of 4'}} />
                    <Stack.Screen name="UserCreation4" component={UserCreation4}       options={{ title: 'Step 4 of 4'}} />
                    <Stack.Screen name="SignIn" component={SignInScreen} initialParams={{ email: null }} 
                    options={{   
                    headerTitle: '',
                    headerStyle: {
                    backgroundColor: Colors.welcomeScreenBg,
                    },
                    headerTintColor: Colors.black,
                    }}
                    />
    </Stack.Navigator>
  );
};

export default AuthStack;
