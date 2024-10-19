import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/colors';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ShiftsScreen = () => {
  const currentMonth = new Date().toLocaleDateString('default', {
    month: 'long',
  });
  return (
    <View style={{flex: 1, backgroundColor: Colors.pureWhite, padding: 30}}>
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}} >
        <TouchableOpacity>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{color: Colors.darkGray, fontSize: 18}}>
              {' '}
              {currentMonth}
            </Text>
            <MaterialIcon
              name="chevron-down"
              size={20}
              color={Colors.darkGray}></MaterialIcon>
          </View>
        </TouchableOpacity>
       
        <View style={{display:'flex', flexDirection:'row' , gap:20,}}>
            <TouchableOpacity
       
        >
            <MaterialIcon name='calendar-month-outline' color={Colors.darkGray} size={20}></MaterialIcon>
        </TouchableOpacity>
    
        <TouchableOpacity
       
       >
           <MaterialIcon name='plus' color={Colors.darkGray} size={20}></MaterialIcon>
       </TouchableOpacity>
        
        </View>
      </View>
    </View>
  );
};

export default ShiftsScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.green,
  },
});
