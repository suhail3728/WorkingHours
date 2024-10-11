import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';

const CustomButton = ({
  title,
  onPress,
  backgroundColor,
  borderColor,
  textColor,}) => {
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

export default CustomButton;
