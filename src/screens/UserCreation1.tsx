import React, { useState } from 'react';
import { UserCreation1Props,PositionType } from '../types/types';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
const positions: PositionType[] = [
  'Owner/Operator',
  'Manager',
  'Employee',
  'Other'
];

function UserCreation1({navigation}:UserCreation1Props) {
  const [selectedPosition, setSelectedPosition] = useState<PositionType | null>(null);

  const handlePositionSelect = (position: PositionType) => {
    setSelectedPosition(position);
  };

  const handleNextPress = () => {
    navigation.navigate('UserCreation2', {selectedPosition});
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your position in the team?</Text>
      <View style={styles.buttonGrid}>
        {positions.map((position) => (
          <TouchableOpacity
            key={position}
            style={[
              styles.button,
              selectedPosition === position && styles.selectedButton
            ]}
            onPress={() => handlePositionSelect(position)}
          >
            <Text style={styles.buttonText}>{position}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <TouchableOpacity
        style={[
          styles.nextButton,
          !selectedPosition && styles.nextButtonDisabled
        ]}
        onPress={handleNextPress}
        disabled={!selectedPosition}
      >
        <Text style={[
          styles.nextButtonText,
          !selectedPosition && styles.nextButtonTextDisabled
        ]}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:20,
    marginBottom: 20,
    textAlign: 'center',
    color: Colors.black,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    width: '45%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2.5%',
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  selectedButton: {
    borderColor: '#5A67D8', 
    borderWidth: 2,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 100, height: 100 },
    shadowOpacity: 0.7,
    shadowRadius: 50,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color:Colors.black,
  },
  nextButton: {
    marginTop: 20,
    height: 60,
    width: 300,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: Colors.orange,
    borderRadius: 7,
  },
  nextButtonDisabled: {
    backgroundColor: 'rgba(254, 104, 9, 0.5)',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nextButtonTextDisabled: {
    color: 'rgba(255, 255, 255, 0.7)', 
  },
});
export default UserCreation1;