import React from 'react';
import {View, Text, Image,  StyleSheet} from 'react-native';
import {NewUserProps} from '../types';
import {IconButton} from 'react-native-paper';
import CustomButton from '../components/CustomButton';
import Colors from '../constants/colors';

function NewUserScreen({navigation}: NewUserProps) {
  return (
    <View style={styles.container}>
      <IconButton
        icon="close"
        size={24}
        style={styles.closeButton}
        onPress={() => navigation.goBack()}
      />

<Text style={styles.text}>So glad you're here! How can we help you?</Text>
<Image
        source={require('../assets/images/newuser.png')}
        style={styles.image}
      />
      <CustomButton
        backgroundColor={Colors.orange}
        onPress={()=> navigation.navigate('UserCreation1')}
        textColor={Colors.white}
        borderColor={Colors.orange}
        title={'Create a new team'}></CustomButton>
         <CustomButton
        backgroundColor={Colors.orange}
        onPress={() => {
          console.log('Join an existing team');
        }}
        textColor={Colors.white}
        borderColor={Colors.orange}
        title={'Join an existing team'}></CustomButton>
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
    fontSize:27,
    fontWeight:'bold',
    padding:40,
    color: Colors.darkGray,
    textAlign:'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  image: {

    width: 300,
    height: 300,
    marginTop:10,
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

export default NewUserScreen;
