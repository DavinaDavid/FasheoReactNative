import React from 'react';
import {StyleSheet,Text,View,TextInput,Image,TouchableOpacity} from 'react-native';


export default class ForgetPassPg extends React.Component{
    render(){
       return(
          <View style={styles.forgetform}>
            <Text style={styles.header}>Forgot Password?</Text>
             <Text>Don't Worry we are here to help!</Text>
               <TextInput style={styles.textinput} placeholder='Enter Your Email' underlineColorAndroid={'transparent'}/>
              
          <TouchableOpacity style={styles.button}>
             <Text style={styles.btntext}>Change Password</Text>
          </TouchableOpacity>
          </View>
       );
    }
 }
 const styles = StyleSheet.create({
    forgetform: {
      alignSelf: 'stretch',
    },
    header: {
       fontSize:24,
       color:'#000000',
       paddingBottom:10,
       marginBottom: 20,
       borderBottomColor: '#A9A9A9',
       borderBottomWidth:1,
    },
    txt:{
       alignSelf:"stretch",
       fontSize:22,
       height:30,
       padding:10,
       margin: 20,
       color:'#000000',
    },
    textinput: {
       alignSelf:"stretch",
       fontSize:18,
       height:50,
       marginTop:30,
       marginBottom:30,
       color:'#000000',
       borderBottomColor:'#A9A9A9',
       borderBottomWidth:1,
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
    btntext: {
       fontSize:20,
       color:'#000000',
       fontWeight:'bold',
    },
 });