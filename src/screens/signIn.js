import React, {useState, useContext} from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import { AuthContext } from '../navigation/AuthContext';
import { CustomButton } from '../components/CustomButton';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons'; 


const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUserId } = useContext(AuthContext);


  const handleSignIn = async () => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    console.log(`User signed in:${(user.uid)}`);
    setUserId(user.uid);

 
    
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>WorkngHours</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor={Colors.darkGray}
        value={email}
        style={styles.textInput}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
     <View style={styles.inputContainer}>
  <Icon 
    name="lock" 
    size={20} 
    color="#666"
    style={styles.icon}
  />
  <TextInput
    placeholder="Enter your password"
    placeholderTextColor= {Colors.darkGray}
    value={password}
    style={styles.textInput}
    onChangeText={setPassword}
    secureTextEntry
  />
</View>
      {error ? <Text>{error}</Text> : null}
      <CustomButton
        title="Log In"
        backgroundColor={Colors.green}
        borderColor={Colors.welcomeScreenBg}
        textColor={Colors.welcomeScreenBg}
        onPress={()=> handleSignIn}></CustomButton>
     
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({

  container: {
   backgroundColor: Colors.welcomeScreenBg,
   alignItems:'center',
  },
  heading: {
    color:Colors.black,
    fontWeight:'900',
    fontSize:37,
    marginBottom:70,

  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,  
    borderColor: Colors.black,
    backgroundColor: Colors.green,
   width:248,
   height:50,
  },

  textInput: {
    paddingVertical: 15,
    fontSize: 16,
    paddingLeft: 0,


  },
  text: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc', // Border color
    borderRadius: 5, // Rounded corners
    backgroundColor: '#f0f0f0', // Background color
    color: '#333', // Text color
  },
});
