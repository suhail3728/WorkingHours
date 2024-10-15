import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Colors from '../constants/colors';
import {useNavigation} from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {getUser} from '../sevices/api';
import {DepartmentButton} from '../components/CustomButton';

const EditDepartments = ({route}) => {
  const {userId} = route.params;
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
      <DepartmentButton
        IconBackgroundColor={Colors.darkBlue}
        IconName={'location-outline'}
        IconColor={Colors.pureWhite}
        title={user ? user.business : 'Eggs and cheese'}>
        </DepartmentButton>

      <DepartmentButton
        IconSize={40}
        IconColor={Colors.lessGray}
        IconName={'add-circle-outline'}
        title="Add Department"
        onPress={() => navigation.navigate('AddDepartment', {userId: userId})}
        style={{paddingLeft: 50}}>
        </DepartmentButton>
        
    </View>
  );
};

export default EditDepartments;
