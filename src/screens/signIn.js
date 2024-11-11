import React, {useState, useContext} from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import {AuthContext} from '../navigation/AuthContext';
import {CustomButton, CustomIconButton} from '../components/CustomButton';
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
   <View style={{flex:1, backgroundColor:Colors.welcomeScreenBg}}>
<View style={styles.container}>
      <Text style={styles.heading}>WorkngHours</Text>
      <View style={styles.inputContainer}>
        <Icon
          name="email-outline"
          size={20}
          color={Colors.black}
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
      <Text
        style={{
          color: Colors.darkGray,
          width: 250,
          fontWeight: '600',
          fontSize: 15,
          marginVertical: 35,
        }}>
        Forgot Password?
      </Text>
      <CustomButton
        title="Log In"
        backgroundColor={Colors.green}
        borderColor={Colors.welcomeScreenBg}
        textColor={Colors.welcomeScreenBg}
        onPress={handleSignIn}></CustomButton>
      <View style={styles.or}>
        <View style={styles.smallBorder}></View>
        <Text style={{color: Colors.darkGray, fontWeight: 'bold'}}>or</Text>
        <View style={styles.smallBorder}></View>
      </View>
      <CustomIconButton
        name="logo-google"
        title="Sign in with Google"
        contentStyle={{
          marginTop:8,
          backgroundColor: Colors.white,
          borderWidth: 1,
          borderColor: Colors.border,
          width: 250,
          borderRadius: 10,
        }}
        iconColor= {Colors.darkerBlack}
      />
      <CustomIconButton
        name="logo-apple"
        title="Sign in with Apple"
        contentStyle={{
          marginTop:10,
          backgroundColor: Colors.white,
          borderWidth: 1,
          borderColor: Colors.border,
          width: 250,
          borderRadius: 10,
        }}
        iconColor={Colors.darkerBlack}
      />
    </View>
   </View>
    
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    marginTop: 50,
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
  border: {
    width: 250,
    borderBottomWidth: 1.2,
    borderColor: Colors.border,
  },

  textInput: {
    fontSize: 16,
    color: Colors.darkGray,
  },

  or: {
    width: 260,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  smallBorder: {
    flex: 1,
    borderBottomWidth: 1.2,
    borderColor: Colors.border,
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
