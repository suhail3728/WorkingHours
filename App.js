import React, { useState, useEffect, useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/authStack';
import UserStack from './src/navigation/userStack';
import { auth } from './src/config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthProvider, AuthContext } from './src/navigation/AuthContext';
import Colors from './src/constants/colors';

const App = () => {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
};

const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { setUserId } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          // Set the user ID in context before logging it
          setUserId(user.uid);
          console.log('User is signed in:', user.uid);
          setTimeout(() => {
            setIsAuthenticated(true);
          }, 1000); 
          
        } else {
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

    return unsubscribe; 
  }, [setUserId]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.white }}>
        <ActivityIndicator size="large" color= {Colors.orange} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <UserStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;
