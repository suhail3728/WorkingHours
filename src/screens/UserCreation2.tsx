import React, { useState } from 'react';
import { UserCreation2Props } from '../types/types';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import Colors from '../constants/colors';

function UserCreation2({route, navigation }: UserCreation2Props) {
  const {selectedPosition} = route.params;
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const isNextButtonEnabled = name.trim() !== '' && business.trim() !== '';

  const handleNextPress = () => {
   navigation.navigate('UserCreation3',{name, business, mobileNumber,selectedPosition});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tell us a bit about yourself</Text>
      
      <View style={styles.inputRow}>
        <Text style={styles.label}>Your Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Your full name"
            value={name}
            onChangeText={setName}
          />
        </View>
      </View>
      
      <View style={styles.inputRow}>
        <Text style={styles.label}>Business Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Your business name"
            value={business}
            onChangeText={setBusiness}
          />
        </View>
      </View>
      
      <View style={styles.inputRow}>
        <Text style={styles.label}>Mobile Number</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Number (Optional)"
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />
        </View>
      </View>
<View style= {styles.buttonContainer}>
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
};

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
    borderBottomColor:Colors.border,
    borderBottomWidth:1,

  },
  buttonContainer:{
    flexGrow: 1,
    justifyContent: 'flex-end',
    marginBottom:50,

  },
  label: {
    width: '30%',
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flex: 1,
    marginLeft:70,

  },
  input: {
    width: '100%',
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
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

export default UserCreation2;
