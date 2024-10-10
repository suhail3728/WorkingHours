import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import AuthStack from './src/navigation/authStack';
import UserStack from './src/navigation/userStack';
import {auth} from './src/config/firbase'
import { onAuthStateChanged } from 'firebase/auth';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setIsAuthenticated(true);
      } else {
        // User is signed out
        setIsAuthenticated(false);
      }
    });
  
    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated === null ? (
       <ActivityIndicator size="large" />
      ): isAuthenticated ? <UserStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;