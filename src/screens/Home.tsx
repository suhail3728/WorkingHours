import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator,StyleSheet } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firbase'; // Make sure this path is correct
import { HomeScreenProps } from '../types';
import { getUser } from '../sevices/api';

interface UserData {
  email: string;
  userId: string;
  timestamp: any;
  name: string;
  business:string;
  mobilenumber:string,
  positon: string,
  adress: string,
  numofemploys: string,
}

const HomeScreen = ({ route, navigation }: HomeScreenProps) => {
  const userId = route.params?.userId ?? 'User';
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true); 
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log(`User signed out ${userData?.email}`);
        navigation.reset({
          index: 0,
          routes: [{ name: 'WelcomeScreen' }],
        });
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  };

  useEffect(() => {
    const loadUserData = async () => {
      try {
        console.log(`Fetching user data for ID: ${userId}`); 
        const data = await getUser(userId); 
        console.log(data);
        setUserData(data);
        
      } catch (error) {
        console.error('Error loading user data:', error);
      } finally {
        setLoading(false); // Stop loading after attempting to load data
      }
    };
  
    loadUserData();
  }, [userId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Show loading indicator
  }

  return (
    <View>
      <Text style={styles.text}>Hey {userData ? userData.name : 'User'}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};


const styles = StyleSheet.create({

    text: {
        color: '#111111'
    }
});

export default HomeScreen;

