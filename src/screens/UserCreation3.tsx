import React, { useState } from 'react';
import { UserCreation3Props } from '../types';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Colors from '../constants/colors';
import { Picker } from '@react-native-picker/picker';

const numOfEmplys: string[] = [
  '<20',
  '20-50',
  '50-80',
  '80+'
];

const businessTypes = [
  { label: 'Select Business Type', value: null },
  { label: 'Restuarant', value: 'Restaurant' },
  { label: 'Hospital', value: 'Hospital' },
  { label: 'School', value: 'School' },
  { label: 'Other', value: 'Other' }
];

function UserCreation3({ route, navigation }: UserCreation3Props) {
  const { name, business, mobileNumber, selectedPosition } = route.params;
  const [adress, setAdress] = useState('');
  const [businessType, setBusinessType] = useState(null);
  const [selectedNumOfEmployees, setSelectedNumOfEmployees] = useState(''); 

  const isNextButtonEnabled = 
    adress.trim() !== '' && 
    businessType !== null && 
    selectedNumOfEmployees.trim() !== ''; 

    const handleNextPress = () => {
      if (isNextButtonEnabled) {
        navigation.navigate('UserCreation4',{name, business, mobileNumber,selectedPosition,adress,businessType, selectedNumOfEmployees});
      } else {
        console.log('Please fill in all required fields');
        
      }
    };

 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tell us a bit about your business</Text>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Address</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={adress}
            onChangeText={setAdress}
          />
        </View>
      </View>

      <View style={styles.inputRow}>
        <View style={styles.businessContainer}>
          <Text style={styles.businessLabel}>Business Type</Text>
       
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={businessType}
              onValueChange={(itemValue) => setBusinessType(itemValue)}
              style={styles.picker}
              itemStyle={styles.pickerItem}
            >
              {businessTypes.map((type, index) => (
                <Picker.Item key={index} label={type.label} value={type.value} />
              ))}
             
            </Picker>
            
          </View>
        </View>
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Number of Employees</Text>
      </View>
      <View style={styles.buttonGrid}>
        {numOfEmplys.map((num, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.numButton, selectedNumOfEmployees === num && styles.numButtonSelected]}
            onPress={() => setSelectedNumOfEmployees(num)}
          >
            <Text style={[styles.numButtonText, selectedNumOfEmployees === num && styles.numButtonTextSelected]}>
              {num}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.nextButton, !isNextButtonEnabled && styles.nextButtonDisabled]}
          onPress={handleNextPress}
          disabled={!isNextButtonEnabled}
        >
          <Text style={[styles.nextButtonText, !isNextButtonEnabled && styles.nextButtonTextDisabled]}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: Colors.black,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 17,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
  },
  label: {
    width: '30%',
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flex: 1,
    marginLeft: 70,
  },
  input: {
    width: '100%',
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  businessContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  businessLabel:{
    flex:1,
    marginRight: 10,
    fontSize: 16,
    color: Colors.black,
  },
  pickerContainer: {
    flexDirection: 'row',
    flex: 1.3, 
    alignItems: 'center',
    justifyContent: 'flex-end', 
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
  },
  pickerItem: {
    fontSize: 16,
    paddingVertical: 10, 
    color:Colors.black,
  },
  picker: {
    flex: 1,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
  numButton: {
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25, 
    marginBottom: 10,
    width: '45%', 
    alignItems: 'center', 
  },
  numButtonSelected: {
    backgroundColor: Colors.orange,
  },
  numButtonText: {
    color: Colors.darkGray,
    fontSize: 16,
  },
  numButtonTextSelected: {
    color: Colors.white,
  },
  buttonContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  selectedValueText: {
    fontSize: 16,
    color: '#333',
    marginRight: 10, 
  },
  nextButton: {
    marginTop: 20,
    height: 60,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
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

export default UserCreation3;
