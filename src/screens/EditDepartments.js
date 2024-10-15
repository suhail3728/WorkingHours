import React, { useEffect, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { getUser } from '../sevices/api';




const EditDepartments =  ( {route})  => {
    const {userId}= route.params;
    const navigation= useNavigation();
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
<TouchableOpacity style={{borderBottomColor:Colors.mediumGray, borderBottomWidth:1}}>
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
      <TouchableOpacity style={{borderBottomColor:Colors.mediumGray, borderBottomWidth:1}} onPress={()=>navigation.navigate('AddDepartment', {userId:userId})}>
        <View style={{padding: 20, paddingLeft:50, display:'flex', flexDirection:'row', alignItems:'center', gap:17}}>
        <Ionicon
              name="add-circle-outline"
              color={Colors.lessGray}
              size={40}></Ionicon>
          <Text style={{color:Colors.darkGray}}>Add Department</Text>
        </View>
      </TouchableOpacity>
</View>
    );
}

export  default EditDepartments;