import React from 'react';
import { View, Text, Button } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firbase';  // Make sure this path is correct
import { HomeScreenProps } from '../types';

const HomeScreen = ({ route, navigation }: HomeScreenProps) => {
  const email = route.params?.email ?? 'User';

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
    
        console.log('User signed out');
    navigation.reset({
          index: 0,
          routes: [{ name: 'SignIn' }],  
        });
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  };

  return (
    <View>
      <Text>Hey {email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
