import 'react-native-gesture-handler';
import React, { useState, useEffect , createContext} from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import AuthStack from './src/navigation/authStack';
import UserStack from './src/navigation/userStack';
import {auth} from './src/config/firebase'
import { onAuthStateChanged } from 'firebase/auth';
import { AuthProvider } from './src/navigation/AuthContext';


export  const Context = createContext();
const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(null); 

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
    <AuthProvider>
    <NavigationContainer>
      {isAuthenticated === null ? (
       <ActivityIndicator size="large" />
      ): isAuthenticated ? <UserStack /> : <AuthStack />}
    </NavigationContainer>
    </AuthProvider>
  );
};

export default App;