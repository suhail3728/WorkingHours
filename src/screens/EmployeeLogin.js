import React, { useState, useContext } from 'react';
import { View,  TextInput, StyleSheet, Dimensions, Button,  } from 'react-native';
import Colors from '../constants/colors';
import { CustomButton } from '../components/CustomButton';
import { verifyUser } from '../sevices/api';
import { AuthContext } from "../navigation/AuthContext";
import { useNavigation } from '@react-navigation/native';




const { height } = Dimensions.get('window');

const EmployeeLogin = () => {

  const navigation = useNavigation();

  const [loginKey, setLoginKey] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const {setEmplyObject} = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      setError('');
      
      if (!loginKey || !email) {
        setError('Please enter both login key and email');
        return;
      }

      const response = await verifyUser(loginKey, email);
      console.log(response);
      setEmplyObject(response);
      navigation.navigate('EmplyCreate', {loginKey});

      // if (response && response.success) {
      //   await AsyncStorage.multiSet([
      //     ['employeeData', JSON.stringify(response.employeeData)],
      //     ['employeeId', response.employeeId],
      //     ['ownerId', loginKey]
      //   ]);
      //   navigation.replace('Home');
      // }
      

    
    } catch (error) {
      if (error.response) {
      
        setError(error.response.data.error || 'Failed to verify user');
      } else {
        setError('Network error. Please try again.');
      }
      console.error('Failed to verify the user', error);
    }
  };




  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
   
        <TextInput
          style={[styles.input,{color:Colors.black} ]}
          value={loginKey}
          onChangeText={setLoginKey}
          placeholder=" login key"
          placeholderTextColor={Colors.lessGray}
        />
     
        <TextInput
          style={[styles.input, {color:Colors.black}]}
          value={email}
          onChangeText={setEmail}
          placeholder="email"
          placeholderTextColor={Colors.lessGray}

        />
  
      <CustomButton
      onPress={handleLogin}
      borderColor={Colors.orange}
      backgroundColor={Colors.orange}
      title={'Verify'}
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
    shadowOffset: { width: 0, height: 2 },
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

export default EmployeeLogin;
