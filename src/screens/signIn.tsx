import React, { useState } from 'react';
import { View, TextInput, Button, Text , StyleSheet} from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firbase';  
import { SignInScreenProps } from '../types';



const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');



  const handleSignIn = async () => {

  
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      

      
      console.log(`User signed in:${user.uid}`);

      navigation.navigate('Home',{userId : user.uid});


  };


  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        style = {styles.text}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput 
        placeholder="Password"
        value={password}
        style = {styles.text}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text>{error}</Text> : null}
      <Button title="Sign In"  onPress={handleSignIn} />
      <Button title="Sign UP page "  onPress={()=> navigation.navigate('SignUp')} />

    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({

text :{
  margin: 10,
  padding: 10,
  borderWidth: 1,
  borderColor: '#ccc', // Border color
  borderRadius: 5, // Rounded corners
  backgroundColor: '#f0f0f0', // Background color
  color: '#333', // Text color
}


});
