import React, {useState, useContext} from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import {AuthContext} from '../navigation/AuthContext';
import {CustomButton} from '../components/CustomButton';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {setUserId} = useContext(AuthContext);

  const handleSignIn = async () => {

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    console.log(`User signed in:${user.uid}`);
    setUserId(user.uid);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>WorkngHours</Text>
      <View style={styles.inputContainer}>
        <Icon
          name="email-outline"
          size={20}
          color={Colors.darkGray}
          style={styles.icon}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor={Colors.darkGray}
          value={email}
          style={styles.textInput}
          onChangeText={setEmail}
       
        />
      </View>
      <View style={styles.border}></View>
      <View style={styles.inputContainer}>
        <Icon
          name="lock-outline"
          size={20}
          color={Colors.darkGray}
          style={styles.icon}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={Colors.darkGray}
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
        onPress={handleSignIn}></CustomButton>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    backgroundColor: Colors.welcomeScreenBg,
    alignItems: 'center',
  },
  heading: {
    color: Colors.darkGray,
    fontWeight: '900',
    fontSize: 37,
    marginBottom: 70,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.welcomeScreenBg,
    width: 248,
    height: 50,
    gap: 13,
  },
  border : {
    width:250,
    borderBottomWidth:1.2,
    borderColor:Colors.border,

  },

  textInput: {
    fontSize: 16,
    color: Colors.darkGray,
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
