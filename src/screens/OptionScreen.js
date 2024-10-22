import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Dimensions,
  Touchable,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Colors from '../constants/colors';
import {AuthContext} from '../navigation/AuthContext';
import {getUser} from '../sevices/api';
import MaterialIcon from 'react-native-vector-icons/Ionicons';

import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import { CustomIconButton } from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import CopyBusinessId from '../components/CopyComponent';

const {height} = Dimensions.get('window');


const OptionScreen = () => {
    const navigation = useNavigation();

  const {userId} = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      console.log(userId);
      const data = await getUser(userId);
      setUserData(data);
      console.log(data);
    };

    loadUserData();
  }, [userId]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.pureWhite}}>
      <ScrollView>
        <View
          style={{
            height: height * 0.26,
            backgroundColor: Colors.blue,
            padding: 20,
            justifyContent: 'space-between',
          }}>
          <Text style={{color: Colors.black, fontSize: 16}}>More</Text>
          <View style={{justifyContent: 'center,', alignItems: 'center'}}>
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.gray,
                borderRadius: 25,
              }}>
              <MaterialIcon name="person" size={60} color={Colors.darkGreen} />
            </View>
            <Text style={{color: Colors.black, fontSize: 18}}>
              {userData ? userData.business : 'Eggs and Cheese'}{' '}
            </Text>
            <CopyBusinessId businessId={userId ? userId : "#businessId"} />
          </View>
        </View>

        <View >
          <Text
            style={{
              backgroundColor: '#FAFAFA',
              padding: 30,
              color: Colors.darkGray,
              fontSize: 15,
            }}>
            Support
          </Text>
        <CustomIconButton
        name={'chatbubbles-outline'}
        title={'Chat with our team'}
        ></CustomIconButton>
         <CustomIconButton
        name={'help-buoy-outline'}
        title={'Help Articles'}
        ></CustomIconButton>
        </View>
        <View >
          <Text
            style={{
              backgroundColor: '#FAFAFA',
              padding: 30,
              color: Colors.darkGray,
              fontSize: 15,
            }}>
            Settings
          </Text>
        <CustomIconButton
        name={'school-outline'}
        title={'Company Settings'}
        ></CustomIconButton>
         <CustomIconButton
        name={'ribbon-outline'}
        title={'Plans & Pricing'}
        ></CustomIconButton>
          <CustomIconButton
        name={'grid-outline'}
        title={'Departments and Roles'}
        onPress={()=>navigation.navigate( 'Departments' )}
        ></CustomIconButton>
          <CustomIconButton
        name={'people-outline'}
        title={'My team'}
        onPress={()=>navigation.navigate('MyTeam')}
        ></CustomIconButton>
           <CustomIconButton
        name={'calendar-outline'}
        title={'Calendar Sync'}
        
        ></CustomIconButton>
       
         <CustomIconButton
        name={'help-buoy-outline'}
        title={'Help Articles'}
        ></CustomIconButton>
        
        </View>


       

      </ScrollView>
    </SafeAreaView>
  );
};

export default OptionScreen;
const styles = StyleSheet.create({
  text: {
    color: Colors.green,
  },
});
