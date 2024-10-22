import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/colors';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';


const ShiftsScreen = () => {
  const navigation = useNavigation();

  const currentMonth = new Date().toLocaleDateString('default', {
    month: 'long',
  });
  return (
    <View style={{flex: 1, backgroundColor: Colors.pureWhite, padding: 30} }>
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between',}} >
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
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginVertical:20}}>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <MaterialIcon name='map-marker-outline' color={Colors.darkerBlue} size={20}></MaterialIcon>
          <Text style={{color:Colors.black}}> Cheese factory</Text>
        </View>
        <MaterialIcon name='tune' color={Colors.black} size={20}></MaterialIcon>

      </View>

      <ScrollView style={{flex:1, marginHorizontal:-30, backgroundColor:Colors.pureWhite
      }}>
<View>


<View style={{display:'flex', flexDirection:'row', justifyContent:'space-between',  backgroundColor:Colors.gray, padding:20}} ><Text
        style={{color:Colors.black, fontWeight:'bold'}}
        >Monday, Oct 14</Text>
        <View>

        </View>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
        <MaterialIcon name='account-outline' size={20} color={Colors.black}></MaterialIcon>
        <Text style={{color:Colors.black}}> 5</Text>

        </View>

      
        </View>
<TouchableOpacity onPress={()=>navigation.navigate('CreateShifts')}>

<View style={{borderColor:Colors.borderLight, borderWidth:1, padding:10, margin:30, borderRadius:10, justifyContent:'center,', alignItems:'center'}}>
  <Text style={{color:Colors.lessGray, }}>Create new shift</Text>
</View>

</TouchableOpacity>
</View>
      
      </ScrollView>
    </View>
  );
};

export default ShiftsScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.green,
  },
});
