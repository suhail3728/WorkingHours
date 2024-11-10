import React, { useState, useEffect, createContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/authStack';
import UserStack from './src/navigation/userStack';
import { auth } from './src/config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthProvider } from './src/navigation/AuthContext';

export const Context = createContext();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          // User is signed in
          console.log('User is signed in:', user.uid);
          setIsAuthenticated(true);
        } else {
          // User is signed out
          console.log('User is signed out');
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Auth state change error:', error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    });

    // Cleanup subscription
    return unsubscribe;
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        {isAuthenticated ? <UserStack /> : <AuthStack />}
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;