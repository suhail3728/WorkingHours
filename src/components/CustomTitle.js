import React from 'react';
import { Text,StyleSheet } from 'react-native';



const CustomTitle = ({
    title,
    textColor
}) => {
    return(
        <Text style={[styles.titles, {color: textColor}]}> {title}</Text>
    );
};

const styles = StyleSheet.create({

    titles: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        lineHeight: 40,
       
      }

}
   
);


export default CustomTitle;