import React, { useState } from "react";
import { UserCreation4Props } from "../types/types";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Colors from '../constants/colors';
import { createUser } from "../services/api";

const UserCreation4 = ({ navigation, route }: UserCreation4Props) => {
  const { 
    name, 
    business, 
    mobileNumber, 
    selectedPosition, 
    adress, 
    businessType, 
    selectedNumOfEmployees 
  } = route.params;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isNextButtonEnabled = email.trim() !== '' && password.trim() !== '';

  // Email validation function
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleCreateUser = async () => {
    // Validate email format
    if (!isValidEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }

    // Validate password length
    if (password.length < 6) {
      Alert.alert('Weak Password', 'Password should be at least 6 characters long');
      return;
    }

    try {
      const userData = {
        name,
        business,
        mobileNumber,
        position: selectedPosition,
        adress,
        businessType,
        numberOfEmployees: selectedNumOfEmployees,
        email,
        password,
      };

      const response = await createUser(userData);
      console.log('User created successfully:', response);
      
      // Navigate to Welcome screen
     
    } catch (error) {
      console.error('Error creating user:', error);
      Alert.alert('Error','Failed to create account. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last step to finalize your account!</Text>
      
      <View style={styles.inputRow}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </View>
      </View>
      
      <View style={styles.inputRow}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Create Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}  
            autoCapitalize="none"
          />
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.nextButton, !isNextButtonEnabled && styles.nextButtonDisabled]}
          onPress={handleCreateUser}
          disabled={!isNextButtonEnabled}
        >
          <Text style={[styles.nextButtonText, !isNextButtonEnabled && styles.nextButtonTextDisabled]}>
            Create account
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


    export default UserCreation4
