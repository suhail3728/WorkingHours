import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Colors from '../constants/colors';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';


export const CustomButton = ({
  title,
  onPress,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor, borderColor}]}
      onPress={onPress}>
      <Text style={[styles.buttonText, {color: textColor}]}> {title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 250,
    borderRadius: 7,
    borderWidth: 2,
    marginVertical: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 14,
  },
});

export const CustomIconButton = ({name, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}
    activeOpacity={0.7} 
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 50,
          gap: 13,
          paddingVertical: 15,
        }}>
        <Ionicon
          name={name}
          color={Colors.lessGray}
          size={16}></Ionicon>
        <Text style={{color: Colors.black, fontSize: 15, fontWeight: '500'}}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const DepartmentButton = ({IconName, IconColor,  IconBackgroundColor, title , onPress, style, IconSize})=>{

  return(

    <TouchableOpacity style={{borderBottomColor:Colors.mediumGray, borderBottomWidth:1}} onPress={onPress}>
        <View style={{padding: 20, display:'flex', flexDirection:'row', alignItems:'center', gap:17, ...style}}>
          <View
            style={{
              height: 45 * 0.8,
              width: 45 * 0.8,
              borderRadius: 25,
              backgroundColor: IconBackgroundColor,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicon
              name= {IconName}
              color={IconColor}
              size={IconSize?IconSize:22}></Ionicon>
          </View>
          <Text style={{color:Colors.darkGray}}>{title}</Text>
        </View>
      </TouchableOpacity>
  );
};


export const ShiftCard = ({start, end, day, dayInNum, month,place , role, department}) =>{

  return (
    <View style={{display: 'flex', flexDirection: 'row', gap: 25}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 0,
              }}>
              <Text style={{color: Colors.darkBlue, fontSize: 13}}>{day}</Text>
              <Text
                style={{color: Colors.black, fontSize: 18, fontWeight: 'bold'}}>
                {dayInNum}
              </Text>
              <Text style={{color: Colors.lessGray, fontSize: 13}}>{month}</Text>
            </View>

            <View>
              <Text style={{color: Colors.black, fontSize: 16}}>
                {start} -- {end}
              </Text>
              <Text style={{color: Colors.lessGray, fontSize: 16}}>
                {place}
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 5,
                  alignItems: 'center',
                }}>
                <Icon name="circle" color={Colors.pink} size={10}></Icon>
                <Text style={{color: Colors.lessGray, fontSize: 16}}>
                  {role} | {department}
                </Text>
              </View>
            </View>
          </View>
  );
};
