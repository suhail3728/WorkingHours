import React, { useEffect, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { getUser } from '../sevices/api';
import { DepartmentButton } from '../components/CustomButton';




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
    <DepartmentButton
    IconBackgroundColor={Colors.darkBlue}
    IconName={"location-outline"}
    title={user? user.business:'Eggs and cheese'}
    

    >

    </DepartmentButton>

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