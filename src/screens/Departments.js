import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Button, StatusBar, TouchableOpacity} from 'react-native';
import Colors from '../constants/colors';
import {useNavigation} from '@react-navigation/native';

import Ionicon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../navigation/AuthContext';
import {getUser} from '../sevices/api';

const Departments = () => {
  const {userId} = useContext(AuthContext);
  const navigation = useNavigation();
  const [user, setUser] = useState('');

  useEffect(() => {
    const loadUser = async () => {
      try {
        console.log(userId);
        const user = await getUser(userId);
        setUser(user);
        console.log(user);
      } catch (error) {
        console.error('Error loading userdata', error);
      }
    };

    loadUser();
  }, [userId]);
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.pureWhite} />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          backgroundColor: Colors.pureWhite,
        }}>
        <Text style={{color: Colors.darkGray, fontSize: 20}}>
          Departments and Roles
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditDepartments', {userId: userId})}>
          <Text style={{color: Colors.black, fontSize: 13}}>EDIT</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View style={{padding: 25, display:'flex', flexDirection:'row', alignItems:'center', gap:17}}>
          <View
            style={{
              height: 45 * 0.8,
              width: 45 * 0.8,
              borderRadius: 25,
              backgroundColor: Colors.darkBlue,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicon
              name="location-outline"
              color={Colors.white}
              size={22}></Ionicon>
          </View>
          <Text style={{color:Colors.darkGray}}>{user? user.business:'Eggs and cheese'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Departments;
