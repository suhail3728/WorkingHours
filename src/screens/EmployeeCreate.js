import React, {useState, useContext, useEffect} from 'react';
import {View, TextInput, StyleSheet, Dimensions, Button, ActivityIndicator} from 'react-native';
import Colors from '../constants/colors';
import {CustomButton} from '../components/CustomButton';
import {createUser} from '../sevices/api';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
const {height} = Dimensions.get('window');


const EmployeeCreate = ({navigation,route}) => {
  const {loginKey,emplyObject} = route.params;

  const [password, setPassword] =useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setLoading] = useState(false);


  useEffect(() => {

    setEmail(emplyObject.employeeData.email);
   
  }, [emplyObject]);
  const handleCreateUser = async () => {
    setLoading(true);

    try {

      const userCredential = await createUserWithEmailAndPassword(auth,email, password);
      const user = userCredential.user;
      console.log('User Created:', user.email, user.uid);
     
      const userData = {
        name: emplyObject.employeeData.name,
        email: email,
        id :user.uid, 
        business_id:loginKey,
        department_id:emplyObject.employeeData.department_id,
        role: emplyObject.employeeData.role,
      
        
      };

await createUser(userData);
     

    } catch (error) {
      console.error('Error creating user:', error);
      Alert.alert('Error','Failed to create account. Please try again.');
    }

  
    };

    if (isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.white }}>
          <ActivityIndicator size="large" color= {Colors.orange} />
        </View>
      );
    }
  return (

    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, {color: Colors.black}]}
          value={password}
          onChangeText={setPassword}
          placeholder="password"
          placeholderTextColor={Colors.lessGray}
          secureTextEntry={true}
        />

        <CustomButton
          onPress={handleCreateUser}
          borderColor={Colors.orange}
          backgroundColor={Colors.orange}
          title={'Create password'}
          textColor={Colors.pureWhite}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBackground,
    justifyContent: 'center',
    padding: 20,
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  label: {
    fontSize: 16,
    color: Colors.darkGray,
  },
  input: {
    height: 40,
    borderColor: Colors.mediumGray,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: Colors.blue,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default EmployeeCreate;
