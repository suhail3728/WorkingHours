import React from "react";
import { View,Text } from "react-native";
import { HomeScreenProps } from "../types";


const HomeScreen = ({route}:HomeScreenProps) => {
const email = route.params?.email ?? 'User';
return(

    <View>
        <Text>Hey {email}</Text>
    </View>
);
    
}


export default HomeScreen;