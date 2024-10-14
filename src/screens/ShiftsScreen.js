import React, { useState } from 'react';
import { View, TextInput, Button, Text , StyleSheet} from 'react-native';
import Colors from '../constants/colors';


const ShiftsScreen = () => {
    return(

        <View>
            <Text style={styles.text}>Hey Shifts</Text>
        </View>
    );
}

export default ShiftsScreen;

const styles =StyleSheet.create({

    text: {

        color: Colors.green,
        
    }
});



