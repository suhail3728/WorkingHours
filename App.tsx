import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './src/config/firbase';


const SignUpScreen = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');



  const handleSignUp = async () => {
  

    try {
      const userCredential = await createUserWithEmailAndPassword(auth,email, password);
      const user = userCredential.user;
      console.log('User Created:', user);
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
        style={{ margin: 10, padding: 10, borderWidth: 1 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={{ margin: 10, padding: 10, borderWidth: 1 }}
      />
     
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}

export default SignUpScreen;