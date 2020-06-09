import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Aboutscreen extends React.Component{
    render(){
        return(
            <View style={styles.inputView}>
                <Text>About Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }});