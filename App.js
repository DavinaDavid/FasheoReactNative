
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  AppRegistry,
  Text,
  Image,
  StatusBar,
  TextInput,
  Button
} from 'react-native';




export default class App extends Component {
 
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={{bottom:30}}
         source = {require('./src/images/logo.png')}
        />
        
        <Text style={{color:'#6A2976' , fontSize:23,fontWeight:"bold",bottom:20}}>Designer Clothing and Fashion</Text>
      </View>
    </View> 
    
  );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#EADCDB'
  },
  logo:{
    alignItems:"center",
    flexGrow:1,
    justifyContent:'center'
  }

});

AppRegistry.registerComponent('App',() => App)

