import React from 'react';
import { StyleSheet, Text, View , ActivityIndicator} from 'react-native';
import fire from './auth/fire';

export default class Loadingscreen extends React.Component {

    componentDidMount(){
      fire.auth().onAuthStateChanged(user =>{
            this.props.navigation.navigate(user ? "App" :"Auth");
        });
    }
    render(){
      return (
        <View style={styles.inputView}>
            <Text>Loading...</Text>
            <ActivityIndicator size="large"></ActivityIndicator>
      </View>
      );
    }
}
const styles = StyleSheet.create({
    inputView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }});