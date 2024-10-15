import React from 'react';
import { View, Text, Button } from 'react-native';
import Colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';



const AddMember =  ()  => {
    const navigation= useNavigation();
    return (

        <View><Text style={{color:Colors.black}}>AddMember</Text>
        <Button
        title='Goback'
        onPress={()=>navigation.goBack()}
        ></Button>
        </View>
    );
}

export  default AddMember;