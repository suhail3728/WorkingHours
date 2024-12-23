import React, { useEffect, useState } from 'react';
import {View, Text, Image,  StyleSheet, ActivityIndicator} from 'react-native';
import Colors from '../constants/colors';

import {CustomIconButton,CustomButton} from '../components/CustomButton';
import {brand} from '../constants/branding';


const WelcomeScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{

      setLoading(false);

    },1000)
  });

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.white }}>
        <ActivityIndicator size="large" color= {Colors.orange} />
      </View>
    );
  }

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
