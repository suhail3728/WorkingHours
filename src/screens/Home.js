import React, {useState, useEffect, useContext} from 'react';
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
import {auth} from '../config/firebase';
import {getEmplyShifts, getShifts, getUser} from '../sevices/api';
import Colors from '../constants/colors';
import {AuthContext} from '../navigation/AuthContext';
import { ShiftCard } from '../components/CustomButton';

const {height} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  const {userId} = useContext(AuthContext);
  const {setEmplyObject} = useContext(AuthContext);
  const {setUserId} = useContext(AuthContext);
  const {emplyFlag, setEmplyFlag} = useContext(AuthContext)

  const {emplyObject} = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [businessId, setBusinessId] = useState('');
  const [shifts, setShifts ] = useState([]);


const formatTime = (dateString) => {
  return new Date(dateString).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};


const formatDate = (dateString) => {
  const date = new Date(dateString);
  return {
    day: date.toLocaleString('en-US', { weekday: 'short' }),
    dayInNum: date.getDate()
  };
};
  const handleLogout = () => {
    setUserId(null)
    setEmplyObject(null);
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

  const loadEmplyShifts = async (id, name) => {
    if (!id || !name) {
      console.error('Missing required parameters:', { id, name });
      return;
    }
  
    try {
      console.log('Fetching shifts with:', { id, name });
      const response = await getEmplyShifts(id, name);
      if (response && response.shifts) {
        setShifts(response.shifts);
        console.log('Shifts loaded:', response.shifts);
      } else {
        console.log('No shifts found or invalid response');
      }
    } catch (error) {
      console.error('Failed to get the employee shifts:', error);
    }
  };


useEffect(() => {
  const loadUserData = async () => {
    try {
      console.log('Loading user with ID:', userId);
      const data = await getUser(userId);
      console.log('User data:', data);
      setBusinessId(data.business_id);
      setUserData(data);
      
      if (data.business_id !== 0) {
        setEmplyFlag(true);
        setBusinessId(data.business_id);
 
      } else {
        setEmplyFlag(false);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (userId) {  
    loadUserData();
  }
}, [userId]);


useEffect(() => {
  const loadShiftsData = async () => {
    if (businessId && userData?.name) {  
      try {
        console.log('Loading shifts for business:', businessId, 'name:', userData.name);
        await loadEmplyShifts(businessId, userData.name);
      } catch (error) {
        console.error('Error loading shifts:', error);
      }
    }
  };

  loadShiftsData();
}, [businessId, userData]); 



  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.blue} />
      <ScrollView style={styles.scrollView}>
  
        <View style={styles.header}>
          <View style={styles.greeting}>
            <View style={styles.greetingCard}>
              <View style={styles.iconContainer}>
                <Icon name="person" size={40} color={Colors.darkGreen} />
              </View>
              <View>
                <View style={styles.date}>
                  <Text style={{color: Colors.darkGray, fontSize: 12}}>
                    Fri, Oct 11
                  </Text>
                  <Icon name="cloud-queue" color={Colors.darkGray} />
                  <Text style={{color: Colors.darkGray, fontSize: 12}}>14</Text>
                </View>

                <Text style={styles.headerText}>
                  Good afternoon, {'\n'}
                  {userData ? userData.name : 'User'}
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => console.log('notifications')}>
              <Icon
                name="notifications-none"
                size={30}
                color={Colors.darkGray}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>
            You have the day off--{'\n'}stay safe!
            <Text>{emplyObject? emplyObject.employeeData.name: ''}</Text>
          </Text>

          <TouchableOpacity
            style={styles.shiftPoolButton}
            onPress={() => console.log('Button Pressed')}>
            <View style={styles.shiftPoolContent}>
              <View>
                <Text
                  style={{
                    color: Colors.darkGray,
                    fontSize: 18,
                    marginBottom: 1,
                  }}>
                  Find Shifts
                </Text>
                <Text style={{color: Colors.darkGray}}>
                  Take a peek in the Shift{'\n'} Pool!
                </Text>
              </View>
              <Icon2 name="duck" size={60} color="#EF5D60" />
            </View>
          </TouchableOpacity>
        </View>
  
        <View style={styles.shiftDetails}>
          <View style={styles.upcomingShifts}>
            <Text style={{fontSize: 26, color: Colors.darkGray}}>
              Your upcoming {'\n'}shifts
            </Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text
                style={{color: Colors.orange, fontSize: 16, fontWeight: '500'}}>
                {' '}
                View all{' '}
              </Text>
            </TouchableOpacity>
          </View>
<View style={{display:'flex', flexDirection:'column', gap:10}}>

{shifts && shifts.length > 0 ? (
      shifts.map((shift, index) => (
        <ShiftCard
          key={shift.shift_id}
          day={formatDate(shift.date).day}
          dayInNum={formatDate(shift.date).dayInNum}
          department={shift.department?.name || "Not specified"}
          start={formatTime(shift.start)}
          end={formatTime(shift.end)}
          role={shift.role?.name || "Not specified"}
          place={userData?.business_name || "Eggs 'n cheese"}
        />
      ))
    ) : (
      <Text style={styles.noShiftsText}>No shifts found</Text>
    )}



</View>
         
          <Button title="Logout" onPress={handleLogout} />
        </View>
        <View>
          <Text style={styles.text}>Hey </Text>
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
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: Colors.blue,
  },

  title: {
    fontSize: 25,
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 20,

    color: Colors.darkGray,
  },

  greeting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  greetingCard: {
    display: 'flex',
    gap: 7,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  notificationButton: {
    borderRadius: 50,
    padding: 10,
  },

  headerText: {
    fontSize: 16,
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
  date: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    alignContent: 'center',
  },

  shiftPoolButton: {},
  upcomingShifts: {
    height: 'auto',
  },
  viewAllButton: {
    alignSelf: 'flex-end',
  },

  shiftPoolContent: {
    borderWidth: 2,
    borderColor: Colors.mediumGray,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.pureWhite,
    padding: 20,
    borderRadius: 10,
  },

  //header section ends

  // shift details section
  shiftDetails: {
    flex: 1,
    backgroundColor: Colors.pureWhite,
    height: height * 0.6,
    margin: -30,
    padding: 30,
  },
});

export default HomeScreen;
