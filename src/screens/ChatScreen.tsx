import React, { useState } from 'react';
import { View, TextInput, Button, Text , StyleSheet} from 'react-native';
import Colors from '../constants/colors';


const ChatScreen = () => {
    return(

        <View>
            <Text style={styles.text}>Hey Chatss</Text>
        </View>
    );
}

export default ChatScreen;

const styles =StyleSheet.create({

    text: {

        color: Colors.green,
        
    }
});
