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
import RadioForm,{RadioButton,RadioButtonInput,RadioButtonLabel} from 'react-native-simple-radio-button';
const {width:WIDTH}=Dimensions.get('window')
var userRole=[
  {label:"Customer ",value:0},
  {label:"Designer ",value:1},
];

export default class regform extends React.Component{
    render(){
       return(
         
        <ImageBackground source = {require('../../images/backgroundpic6.jpg')} style={styles.backgroundContainer}>
            <View style={styles.container1}>
              <Text style={styles.header}>Register YourSelf!</Text>
                  <TextInput style={styles.textinput} placeholder='Your Name' placeholderTextColor={'#4d3439'}  underlineColorAndroid={'transparent'}/>
                  <TextInput style={styles.textinput} placeholder='Your Email' placeholderTextColor={'#4d3439'}  underlineColorAndroid={'transparent'}/>
                  <TextInput style={styles.textinput} placeholder='Set Password' placeholderTextColor={'#4d3439'} secureTextEntry={true} underlineColorAndroid={'transparent'}/>
                  <TextInput style={styles.textinput} placeholder='Add Address' placeholderTextColor={'#4d3439'} underlineColorAndroid={'transparent'}/>
                  <Text style={styles.txt}>Who are you?</Text>
                  <RadioForm radio_props={userRole} initial={-1} onPress={(value) => {}} buttonSize={15} selectedButtonColor={'green'} selectedLabelColor={'green'} formHorizontal={true}/>
            
            <TouchableOpacity style={styles.button}
            onPress={() => {
              alert("Thanks For Registration")
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Details' })
                ],
              }))
            }}
            >
              <Text style={styles.btntextSignup}>Sign Up</Text>
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