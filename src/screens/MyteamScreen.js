import React from 'react';
import { View, Text, Button } from 'react-native';
import Colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';



const MyTeamScreen =  ()  => {
    const navigation= useNavigation();
    return (

        <View><Text style={{color:Colors.black}}>MyTeamScreen</Text>
        <Button
        title='Add member'
        onPress={()=>navigation.navigate('AddMember')}
        ></Button>
        </View>
    );
}

export  default MyTeamScreen;