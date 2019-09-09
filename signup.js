import React from 'react';
import {StyleSheet,Text,View,TextInput,TouchableOpacity} from 'react-native';
import RadioForm,{RadioButton,RadioButtonInput,RadioButtonLabel} from 'react-native-simple-radio-button';

var userRole=[
   {label:"Customer ",value:0},
   {label:"Designer ",value:1},
];

export default class regform extends React.Component{
   render(){
      return(
         <View style={styles.regform}>
            <Text style={styles.header}>Register YourSelf!</Text>
               <TextInput style={styles.textinput} placeholder='Your Name' underlineColorAndroid={'transparent'}/>
               <TextInput style={styles.textinput} placeholder='Your Email' underlineColorAndroid={'transparent'}/>
               <TextInput style={styles.textinput} placeholder='Set Password' secureTextEntry={true} underlineColorAndroid={'transparent'}/>
               <TextInput style={styles.textinput} placeholder='Add Address' underlineColorAndroid={'transparent'}/>
               <Text style={styles.txt}>Who are you?</Text>
               <RadioForm radio_props={userRole} initial={-1} onPress={(value) => {}} buttonSize={15} selectedButtonColor={'green'} selectedLabelColor={'green'} formHorizontal={true}/>
         
         <TouchableOpacity style={styles.button}>
            <Text style={styles.btntext}>Sign Up</Text>
         </TouchableOpacity>
         </View>
      );
   }
}
const styles = StyleSheet.create({
   regform: {
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