import React from 'react';
import {View, Text, Image,  StyleSheet} from 'react-native';
import Colors from '../constants/colors';

import CustomButton from '../components/CustomButton';
import {brand} from '../constants/branding';
import { WelcomeScreenProps } from '../types';

const WelcomeScreen = ({navigation}:WelcomeScreenProps) => {
  return (
    <View style={styles.container}>
       
      <Image
        source={require('../assets/images/welcome.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Respond to requests </Text>
      <Text style={styles.textMessage}>Approve or decline shift trades, availability and time off</Text>
      <View style={styles.buttonContainer}>
      <CustomButton
        title="Log In"
        backgroundColor={Colors.green}
        borderColor={Colors.welcomeScreenBg}
        textColor={Colors.welcomeScreenBg}
        onPress={()=> navigation.navigate('SignIn')}></CustomButton>

      <CustomButton
        backgroundColor={Colors.gray}
        borderColor={Colors.border}
        title={ "I'm new to " + brand.name}
        onPress={()=> navigation.navigate('NewUser')}
        textColor={Colors.darkGray}></CustomButton>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.welcomeScreenBg,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  spacer:{
    height:500,
  },
  image: {
    width: 250,
    height: 250,
    marginTop:10,
    marginBottom:0,

    
  },
  text: {
    fontSize: 14,
    color: '#414141',
    marginTop:0,
  
  },
  textMessage: {
    color: '#7E7D79',
    fontSize: 14,
   
    textAlign:'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {

    marginBottom: 50,
    marginTop: 80,

  },

  
});

export default WelcomeScreen;
