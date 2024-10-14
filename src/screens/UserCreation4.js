import React, { useState,  useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Colors from '../constants/colors';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { createUser } from "../sevices/api";


const UserCreation4 = ({ navigation, route }) => {
  const { 
    name, 
    business, 
    mobileNumber, 
    selectedPosition, 
    address, 
    businessType, 
    selectedNumOfEmployees 
  } = route.params;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isNextButtonEnabled = email.trim() !== '' && password.trim() !== '';
  const { setUserId } = useContext(AuthContext);




  const handleCreateUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth,email, password);
      const user = userCredential.user;
      console.log('User Created:', user.email, user.uid);
      setUserId(user.uid);

   
      
      // Navigate to Welcome screen
     
      const userData = {
        name,
        id :user.uid, 
        business,
        mobileNumber,
        position: selectedPosition,
        address,
        businessType,
        numberOfEmployees: selectedNumOfEmployees,
        email,
        
      };

      const response = await createUser(userData);
      navigation.navigate('HomeScreen');

    } catch (error) {
      console.error('Error creating user:', error);
      Alert.alert('Error','Failed to create account. Please try again.');
    }

  
    }

   
  

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

