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
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
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
      <StatusBar barStyle="dark-content" backgroundColor={Colors.blue} />
      <ScrollView style={styles.scrollView}>
        {/* header section */}
        <View style={styles.header}>
          <View style={styles.greeting}>
         
         
            <View style={styles.greetingCard}>
              <View style={styles.iconContainer}>
                <Icon name="person" size={40} color={Colors.darkGreen} />
              </View>
              <View>
                <View style={styles.date}>
                <Text style={{color:Colors.darkGray ,fontSize:12}}>Fri, Oct 11</Text>
                <Icon name='cloud-queue' color={Colors.darkGray}/>
                <Text style={{color:Colors.darkGray ,fontSize:12}}>14</Text>
                </View>
               
                <Text style={styles.headerText}>
                Good afternoon, {"\n"}
              {userData ? userData.name : 'User'} 
            </Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => console.log('notifications')}>
              <Icon name="notifications-none" size={30} color={Colors.darkGray} />
            </TouchableOpacity>
           
          </View>
          <Text style={styles.title}>You have the day off--{"\n"}stay safe!</Text>

          <TouchableOpacity style={styles.shiftPoolButton} onPress={() => console.log('Button Pressed')}>
      <View style={styles.shiftPoolContent}>
    
        <View>
          <Text style={{color:Colors.darkGray, fontSize:18, marginBottom:1,}}>Find Shifts</Text>
          <Text style={{color:Colors.darkGray,}}>Take a peek in the Shift{"\n"} Pool!</Text>
        </View>
        <Icon2 name="duck" size={60} color="#EF5D60"  />
      </View>
    </TouchableOpacity>
       
        </View>
        {/* shift details section */}
        <View style={styles.shiftDetails}>

        </View>
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
    padding: 30,
  },

  text: {
    color: '#111111',

    // header sections starts
  },
  header: {
    height: height * 0.5,
    display:'flex',
    flexDirection:'column',
    flex: 1,
    backgroundColor: Colors.blue,
  },

  title: {
    fontSize: 28,
    fontWeight: '400',
    marginTop:20,
    marginBottom: 20,
   
    color: Colors.darkGray,
  },

  greeting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  greetingCard:{

    display: 'flex',
    gap: 7,
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    

  },
  notificationButton: {
    borderRadius: 50,
    padding: 10,
  },

  headerText: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.black,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#F7FAF3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  date:{
    display:'flex',
    flexDirection:'row',
    gap:3,
    alignContent:'center'

  },

  shiftPoolButton:{



  },

  shiftPoolContent:{
    borderWidth:2,
borderColor:Colors.mediumGray,
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:Colors.pureWhite,
    padding:20,
    borderRadius:10,
  },

  //header section ends

  // shift details section
  shiftDetails: {
    
    flex: 1,
    backgroundColor: Colors.orange,
    height: height * 0.6,
  },
});

export default HomeScreen;
