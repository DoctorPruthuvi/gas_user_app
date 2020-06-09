import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Messagescreen extends React.Component{
    render(){
        return(
            <View style={styles.inputView}>
                <Text>Message Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputView: {
        flex: 1,
        backgroundColor: '#1771f1',
        alignItems: 'center',
        justifyContent: 'center',
    }});