import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
//import ForgetPassPg from './forgotPass.js';
import Regform from './signup.js';


export default class App extends React.Component{
   render(){
      return(
         <View style={styles.container}>
<Regform/>
         </View>
      );
   }
}
const styles = StyleSheet.create({
   container:{
      flex:1,
      justifyContent: 'center',
      backgroundColor: '#ECDEDE',
      paddingLeft: 60,
      paddingRight: 60,
   },
})