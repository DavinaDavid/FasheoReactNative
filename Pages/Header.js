import React from 'react';
import {StyleSheet,Text,View,Image,ScrollView,Dimensions,TouchableOpacity} from 'react-native';
import {Header,Right,Left,Icon, Button} from 'native-base';
import Logo from '../images/logo.png';

class HeaderBar extends React.Component{
      render(){
       return(
             <Header style={styles.container}>
                   <Icon style={{position:'absolute',left:8}} name="menu" onPress={()=>this.props.navigation.openDrawer()}/>
                   <Image source={Logo} style={{height:50,width:80,padding:3,position:'absolute',left:40}}/>
              </Header>
       );
    }
 }
 
 export default HeaderBar;
 const styles = StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:'#DDA0DD',
    },
 
 })