import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert , StyleSheet} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

import { createUser } from '../sevices/api';

const SignUpScreen = ({navigation}) => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');



  const handleSignUp = async () => {
  

    try {
      const userCredential = await createUserWithEmailAndPassword(auth,email, password);
      const user = userCredential.user;
      console.log('User Created:', user.email, user.uid);
 
      const userData = {
        email: user.email,
        id: user.uid,
      }
      const response = await createUser(userData);
      navigation.navigate('Home',{userId : user.uid});
     

    
      Alert.alert('User created successfully horaaaa!');
    } catch (error ) {
    console.log(error);
}
  };

  

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={ styles.text}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.text}
      />
     
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}

const styles = StyleSheet.create({

  text :{
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc', // Border color
    borderRadius: 5,
    backgroundColor: '#f0f0f0', // Background color
    color: '#333', // Text color
  }
  
  
  });
  

export default SignUpScreen;