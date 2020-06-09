import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,LayoutAnimation } from 'react-native';
import fire from './auth/fire';
import firebase from 'firebase';


export default class Homescreen extends React.Component {

      constructor(){
  super()


      this.database= fire.database().ref().child('weight/number');

      this.state = {
        weight : 10
      }
      }
      componentDidMount(){
        this.database.on('value',snap =>{
          this.setState({
            weight:snap.val()
          });
        });
      }
    render(){
      return (
        <View style={styles.inputView}>
          <Text style={styles.inputt}>Your GAS Level</Text>
            <Text style={styles.inputtext}>
              {this.state.weight} %
            </Text>
        </View>
      );
    }
}
const styles = StyleSheet.create({
    inputView: {
      flex: 1,
      backgroundColor: '#1771f1',
      alignItems: 'center',
      justifyContent: 'center',
    },
      inputtext: {
        flex: 1,
        fontSize: 50,
        color:'white',
        marginTop: 30,
        fontWeight: 'bold'
    },
    inputt: {
      fontSize: 50,
      color:'white',
      marginTop: 250,
      fontWeight: 'bold'
  }});