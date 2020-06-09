import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,LayoutAnimation } from 'react-native';
import fire from './auth/fire';

export default class Profilescreen extends React.Component {
    state = {
        email:"",
        displayName:""
    };

    componentDidMount(){
        const{email, displayName} = fire.auth().currentUser
        this.setState({email,displayName})
    };

    signOutUser = () =>{
      fire.auth().signOut();
    };

    render(){
      LayoutAnimation.easeInEaseOut();
      return (
        <View style={styles.inputView}>
            <Text>Hi{this.state.email}!</Text>

        <TouchableOpacity styles={{marginTop: 100}} onPress={this.signOutUser}>
          <Text>Logout</Text>
        </TouchableOpacity> 
        </View>

      );
    }
}
const styles = StyleSheet.create({
    inputView: {
      flex: 1,
    //   backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    }});