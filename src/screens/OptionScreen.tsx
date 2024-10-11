import React, { useState } from 'react';
import { View, TextInput, Button, Text , StyleSheet} from 'react-native';
import Colors from '../constants/colors';


const OptionScreen = () => {
    return(

        <View>
            <Text style={styles.text}>Hey Options</Text>
        </View>
    );
}

export default OptionScreen;
const styles =StyleSheet.create({

    text: {

        color: Colors.green,
        
    }
});
