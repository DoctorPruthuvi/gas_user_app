import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Container } from 'react-native';
import fire from './auth/fire';

export default class Signupscreen extends React.Component {

    state ={
    name:"",
    area:"",
    email:"",
    password:"",
    errorMessage: null
  };

  handleSignup = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email,this.state.password)
      .then(()=>{
          fire.database().ref('users/').push(
            {
              username: this.state.name,
              userarea: this.state.area
            }
          )
      })
      .catch(error => this.setState({errorMessage:error.message}));
  };
  
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>SIGNUP</Text>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
        </View>

        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Name..." 
            placeholderTextColor="white"
            onChangeText={name => this.setState({name})}
            value={this.state.name}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Area..." 
            placeholderTextColor="white"
            onChangeText={area => this.setState({area})}
            value={this.state.area}
          />
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

        <TouchableOpacity style={styles.loginBtn} onPress={this.handleSignup}>
          <Text style={styles.loginText}>SIGNUP</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> this.props.navigation.navigate("Login")}>
          <Text style={styles.loginText}>LOGIN</Text>
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