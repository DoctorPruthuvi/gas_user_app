import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Container,style } from 'react-native';
import fire from './auth/fire';

export default class Loginscreen extends React.Component {

  state ={
    email:"",
    password:"",
    errorMessage: null
  };

  handleLogin = () => {
    const{email,password} = this.state;

    fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(error => this.setState({errorMessage:error.message}));
  };
  
  render(){
    return (

      <View style={styles.container}>
        <Text style={styles.logo}>HGMS</Text>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
        </View>

        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="white"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="white"
            onChangeText={password => this.setState({password})}
            value={this.state.password}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={this.handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> this.props.navigation.navigate("Signup")}>
          <Text style={styles.loginText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
    logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  errorMessage:{
    height: 72,
    marginHorizontal:30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error:{
    color:"white",
    fontSize:13,
    textAlign:"center",
    fontWeight:"600"
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    fontSize:15,
    fontWeight:"bold",
    color:"white"
  }
});