import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Colors from '../constants/colors';
import MaterialIcon from 'react-native-vector-icons/Ionicons';

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
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 50,
          gap: 13,
          paddingVertical: 15,
        }}>
        <MaterialIcon
          name={name}
          color={Colors.lessGray}
          size={16}></MaterialIcon>
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
        <View style={{padding: 25, display:'flex', flexDirection:'row', alignItems:'center', gap:17, ...style}}>
          <View
            style={{
              height: 45 * 0.8,
              width: 45 * 0.8,
              borderRadius: 25,
              backgroundColor: IconBackgroundColor,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcon
              name= {IconName}
              color={IconColor}
              size={IconSize?IconSize:22}></MaterialIcon>
          </View>
          <Text style={{color:Colors.darkGray}}>{title}</Text>
        </View>
      </TouchableOpacity>
  );
};
