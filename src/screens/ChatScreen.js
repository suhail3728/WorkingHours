import React from 'react';
import {View, Text, Image,  StyleSheet} from 'react-native';
import {CustomButton}from '../components/CustomButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../constants/colors';


function ChatScreen({navigation}) {

  return (
    <View style={styles.container}>
     <MaterialIcons 
  name="close" 
  size={24} 
  onPress={() => navigation.goBack()} 
/>


<Image
        source={require('../assets/images/newuser.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Only available with membership! {"\n"}Talk to us to get free trial?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  text: {
    fontSize:18,
    fontWeight:'500',
    padding:40,
    color: Colors.darkGray,
    lineHeight:25,
    textAlign:'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  image: {

    width: 200,
    height: 200,
    marginTop:60,
    marginBottom:70,


  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
  },
});

export default ChatScreen;
