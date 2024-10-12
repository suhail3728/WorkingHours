import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
import {signOut} from 'firebase/auth';
import {auth} from '../config/firbase'; // Make sure this path is correct
import {HomeScreenProps} from '../types';
import {getUser} from '../sevices/api';
import Colors from '../constants/colors';

const {height} = Dimensions.get('window');
interface UserData {
  email: string;
  userId: string;
  timestamp: any;
  name: string;
  business: string;
  mobilenumber: string;
  positon: string;
  adress: string;
  numofemploys: string;
}

const HomeScreen = ({route, navigation}: HomeScreenProps) => {
  const userId = route.params?.userId ?? 'User';
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log(`User signed out ${userData?.email}`);
        navigation.reset({
          index: 0,
          routes: [{name: 'Welcome'}],
        });
      })
      .catch(error => {
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
    <SafeAreaView style={styles.safeArea}>
      {}
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.blue}
        translucent={true}
      />

      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome Back!</Text>
          <Text style={styles.subHeaderText}>
            {' '}
            {userData ? userData.name : 'User'} Dashboard
          </Text>
        </View>
        <View style={styles.shifts}></View>
        <View>
          <Text style={styles.text}>Hey </Text>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  scrollView: {
    flex: 1,
    backgroundColor: Colors.blue,
  },

  text: {
    color: '#111111',
  },
  header: {
    height: height * 0.5,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

    flex: 1,

    backgroundColor: Colors.blue,
  },
  shifts: {
    flex: 1,
    backgroundColor: Colors.orange,
    height: height * 0.6,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
});

export default HomeScreen;
