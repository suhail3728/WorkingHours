import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Colors from '../constants/colors';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Base Button
export const CustomButton = ({
  title,
  onPress,
  backgroundColor,
  borderColor,
  textColor,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.baseButton, {backgroundColor, borderColor}, buttonStyle]}
      onPress={onPress}>
      <Text style={[styles.baseButtonText, {color: textColor}, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

// Icon Button
export const CustomIconButton = ({
  name,
  title,
  onPress,
  buttonStyle,
  contentStyle,
  iconStyle,
  textStyle,
  iconColor = Colors.lessGray,
  iconSize = 16,
}) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      activeOpacity={0.7}
      style={buttonStyle}
    >
      <View style={[styles.iconButtonContent, contentStyle]}>
        <Ionicon
          name={name}
          color={iconColor}
          size={iconSize}
          style={iconStyle}
        />
        <Text style={[styles.iconButtonText, textStyle]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// Department Button
export const DepartmentButton = ({
  IconName,
  IconColor,
  IconBackgroundColor,
  title,
  onPress,
  containerStyle,
  iconContainerStyle,
  textStyle,
  IconSize = 22,
}) => {
  return (
    <TouchableOpacity 
      style={[styles.departmentButton, containerStyle]} 
      onPress={onPress}
    >
      <View style={[styles.departmentContent]}>
        <View style={[styles.departmentIconContainer, 
          { backgroundColor: IconBackgroundColor },
          iconContainerStyle
        ]}>
          <Ionicon
            name={IconName}
            color={IconColor}
            size={IconSize}
          />
        </View>
        <Text style={[styles.departmentText, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Shift Card
export const ShiftCard = ({
  start,
  end,
  day,
  dayInNum,
  month,
  place,
  role,
  department,
  containerStyle,
  dateStyle,
  timeStyle,
  placeStyle,
  roleStyle,
}) => {
  return (
    <View style={[styles.shiftContainer, containerStyle]}>
      <View style={styles.dateContainer}>
        <Text style={[styles.dayText, dateStyle]}>{day}</Text>
        <Text style={[styles.dayNumText, dateStyle]}>{dayInNum}</Text>
        <Text style={[styles.monthText, dateStyle]}>{month}</Text>
      </View>

      <View style={styles.shiftDetails}>
        <Text style={[styles.timeText, timeStyle]}>
          {start} -- {end}
        </Text>
        <Text style={[styles.placeText, placeStyle]}>{place}</Text>
        <View style={styles.roleContainer}>
          <Icon name="circle" color={Colors.pink} size={10} />
          <Text style={[styles.roleText, roleStyle]}>
            {role} | {department}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Base Button Styles
  baseButton: {
    height: 50,
    width: 250,
    borderRadius: 7,
    borderWidth: 2,
    marginVertical: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseButtonText: {
    fontSize: 14,
  },

  // Icon Button Styles
  iconButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 50,
    gap: 13,
    paddingVertical: 15,
  },
  iconButtonText: {
    color: Colors.black,
    fontSize: 15,
    fontWeight: '500',
  },

  // Department Button Styles
  departmentButton: {
    borderBottomColor: Colors.mediumGray,
    borderBottomWidth: 1,
  },
  departmentContent: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 17,
  },
  departmentIconContainer: {
    height: 36,
    width: 36,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  departmentText: {
    color: Colors.darkGray,
  },

  // Shift Card Styles
  shiftContainer: {
    flexDirection: 'row',
    gap: 25,
  },
  dateContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 0,
  },
  dayText: {
    color: Colors.darkBlue,
    fontSize: 13,
  },
  dayNumText: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  monthText: {
    color: Colors.lessGray,
    fontSize: 13,
  },
  shiftDetails: {
    flex: 1,
  },
  timeText: {
    color: Colors.black,
    fontSize: 16,
  },
  placeText: {
    color: Colors.lessGray,
    fontSize: 16,
  },
  roleContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  roleText: {
    color: Colors.lessGray,
    fontSize: 16,
  },
});