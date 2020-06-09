import React from 'react';
import Loginscreen from './src/login';
import Signupscreen from './src/signup';
import Homescreen from './src/home';
import Loadingscreen from './src/loadingscreen';
import Profilescreen from './src/profilescreen'
import Messagescreen from './src/messagescreen'
import Aboutscreen from './src/aboutscreen'
import Usagescreen from './src/usagescreen'
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from 'react-navigation-tabs'
// import Icon from '@material-ui/core/Icon'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


// const AppStack = createStackNavigator({
//   Home : Homescreen
// });
const AppTabNavigator = createBottomTabNavigator(
  {
    Home:{
      screen: Homescreen,
      navigationOptions:{
        tabBarIcon:({tintcolor}) => <Icon name="home" size={25} color={tintcolor} />
      }
    },
    Message:{
      screen: Messagescreen,
      navigationOptions:{
        tabBarIcon:({tintcolor}) => <Icon name="home" size={25} color={tintcolor} />
      }
    },
    About:{
      screen: Aboutscreen,
      navigationOptions:{
        tabBarIcon:({tintcolor}) => <Icon name="home" size={25} color={tintcolor} />
      }
    },
    Profile:{
      screen: Profilescreen,
      navigationOptions:{
        tabBarIcon:({tintcolor}) => <Icon name="home" size={25} color={tintcolor} />
      }
    },
    Usage:{
      screen: Usagescreen,
      navigationOptions:{
        tabBarIcon:({tintcolor}) => <Icon name="home" size={25} color={tintcolor} />
      }
    }
  }
);
const AuthStack = createStackNavigator({
  Login : Loginscreen,
  Signup : Signupscreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading : Loadingscreen,
      App: AppTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName : "Loading"
    }
  )
)


