import React from 'react';
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
import { createAppContainer , NavigationActions, StackActions} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default class ForgetPassPg extends React.Component{
    render(){
       return(
        <ImageBackground source = {require('../../images/backgroundpic6.jpg')} style={styles.backgroundContainer}> 
          <View style={styles.container1}>
            <Text style={styles.header}>Forgot Password?</Text>
             <Text style={{bottom:20,fontWeight:'bold'}}>Don't Worry we are here to help!</Text>
               <TextInput style={styles.textinput} placeholder='Enter Your Email' underlineColorAndroid={'transparent'} placeholderTextColor={'#4d3439'}/>
              
          <TouchableOpacity style={styles.button}
           onPress={() => {
            alert("Please Check your Email")
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
            }))
          }}
          
          >
             <Text style={styles.btntextSignup}>Change Password</Text>
          </TouchableOpacity>
          </View>
          </ImageBackground>
       );
    }
  }





  
   /////SignUp style sheet
const styles = StyleSheet.create({
    regform1: {
     alignSelf: 'stretch',
   },
   header: {
      fontSize:24,
      color:'#000000',
      paddingBottom:10,
      marginBottom: 40,
      borderBottomColor: '#A9A9A9',
      borderBottomWidth:1,
   },
   txt:{
      alignSelf:"stretch",
      height:30,
      marginBottom:2,
      color:'#000000',
   },
   textinput: {
      alignSelf:"stretch",
      height:40,
      marginBottom:30,
      color:'#000000',
      borderBottomColor:'#A9A9A9',
      borderBottomWidth:1,
   },
   backgroundContainer:{
     justifyContent:"center",
     flex:1,
     width:null,
     height:null,
     alignItems:"center"
     },
   button: {
      alignSelf:"stretch",
      alignItems: "center",
      padding:10,
      backgroundColor: '#FFB6C1',
      borderRadius:8,
      marginTop:30,
      borderColor:'#000000',
   },
   btntextSignup: {
      fontSize:20,
      color:'#000000',
      fontWeight:'bold',
   },
   container1:{
     flex:1,
     justifyContent: 'center',
     // backgroundColor: '#ECDEDE',
     paddingLeft: 60,
     paddingRight: 60,
     alignSelf: 'stretch'
  },
 
 
 
 });