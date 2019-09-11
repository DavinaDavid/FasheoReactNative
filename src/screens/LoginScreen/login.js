import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Button
} from 'react-native';
import { whileStatement } from '@babel/types';
import { createAppContainer , NavigationActions, StackActions} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const {width:WIDTH}=Dimensions.get('window')
export default class login extends Component {
  render() {
    return (
      
  <ImageBackground source = {require('../../images/backgroundpic7.jpg')} style={styles.backgroundContainer}>
  <View style={styles.logoContainer}>
    <Image source = {require('../../images/loginpic2.png')} style={styles.loginlogo}></Image>
    <Text style={styles.logintext}>Fasheonic Login</Text>
  </View>
  <View>
    <TextInput
    style={styles.inputStyle}
    placeholder={'Enter Your Username'}
    placeholderTextColor={'#4d3439'}
    underlineColorAndroid='transparent'
    ></TextInput>
  </View>
  <View>
    <TextInput
    style={styles.inputStyle2}
    placeholder={'Enter Your Password'}
    placeholderTextColor={'#4d3439'}
    secureTextEntry={true}
    underlineColorAndroid='transparent'
    ></TextInput>
  </View>
<View style={{flexDirection:"row",justifyContent:"space-between",top:25}}>
  <TouchableOpacity style={{
    backgroundColor:'#f74f6e',
    padding:6,
    width:130,
    height:40,
    marginRight:20,
    textAlign:"center",
    alignItems:"center"
    
  }}>
    <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>Login</Text>
  </TouchableOpacity>
  <TouchableOpacity style={{
      backgroundColor:'#fff',
      padding:6,
      width:130,
      height:40,
      textAlign:"center",
      alignItems:"center"
  }}        
           onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Regform' })
              ],
            }))
          }}>
    <Text style={{color:'#eb0958',fontWeight:'bold',fontSize:16}}>Register</Text>
  </TouchableOpacity>
</View>
<Text style={{top:36,fontSize:16,color:'#fff',fontWeight:"bold",paddingRight:130}}
onPress={() => {
  this.props.navigation.dispatch(StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'ForgetForm' })
    ],
  }))
}}

>Forget Password ?</Text>
</ImageBackground>
);
   }
}


const styles = StyleSheet.create({
  backgroundContainer:{
  justifyContent:"center",
  flex:1,
  width:null,
  height:null,
  alignItems:"center"
  },
  loginlogo:{
    width:130,
    height:130
  },
  logoContainer:{
   alignItems:"center",
   bottom:30
  },
  logintext:{
    color:'#eb0958',
    fontSize:27,
    fontWeight:"bold",
    bottom:10,
    marginTop:10,
    opacity:0.8
  },
  inputStyle:{
    bottom:20,
    width:WIDTH - 55,
    height:45,
    borderRadius:25,
    fontSize:17,
    paddingLeft:45,
    backgroundColor:'#ffe8ec',
    color:'#4d3439',
    marginHorizontal:25,
    borderColor:'#4d3439'
  },
  inputStyle2:{
    width:WIDTH - 55,
    height:45,
    borderRadius:25,
    fontSize:17,
    paddingLeft:45,
    backgroundColor:'#ffe8ec',
    color:'#4d3439',
    marginHorizontal:25,
    borderColor:'#4d3439',
    top:5
  },
  loginbtn:{
    width:WIDTH - 55,
    height:45,
    borderRadius:25,
    justifyContent:"center",
    marginTop:40,
    backgroundColor:'#fa6981'
  },
  btntext:{
    justifyContent:"center",
    alignItems:"center",
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    textAlign:"center"

  }

});
