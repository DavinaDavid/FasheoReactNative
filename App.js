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
var userRole=[
  {label:"Customer ",value:0},
  {label:"Designer ",value:1},
];
const {width:WIDTH}=Dimensions.get('window')
class HomeScreen extends React.Component {
   componentDidMount(){
     setTimeout(
        () => {

          this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Details' })
            ],
          }))

        },3000

     );
     
     
   }

  render() {
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

class DetailsScreen extends React.Component {
  render() {
   return (
  //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //       <Text>Details Screen</Text>
  //       <Button
  //         title="Go Back"
  //         onPress={() => {
  //           this.props.navigation.dispatch(StackActions.reset({
  //             index: 0,
  //             actions: [
  //               NavigationActions.navigate({ routeName: 'Home' })
  //             ],
  //           }))
  //         }}
  //       />
  //     </View>
  //   
  // }  
         

  <ImageBackground source = {require('./src/images/backgroundpic7.jpg')} style={styles.backgroundContainer}>
  <View style={styles.logoContainer}>
    <Image source = {require('./src/images/loginpic2.png')} style={styles.loginlogo}></Image>
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
    <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>Signin</Text>
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
</ImageBackground>
);
   }
}


class regform extends React.Component{
  render(){
     return(
       
        <View style={styles.container1}>
          <View style={styles.regform1}>
            <Text style={styles.header}>Register YourSelf!</Text>
                <TextInput style={styles.textinput} placeholder='Your Name' underlineColorAndroid={'transparent'}/>
                <TextInput style={styles.textinput} placeholder='Your Email' underlineColorAndroid={'transparent'}/>
                <TextInput style={styles.textinput} placeholder='Set Password' secureTextEntry={true} underlineColorAndroid={'transparent'}/>
                <TextInput style={styles.textinput} placeholder='Add Address' underlineColorAndroid={'transparent'}/>
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
        </View>
     );
  }
}































const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      header: null,
    },
  },
  Regform:{
    screen: regform,
    navigationOptions: {
      header: null,
    },
  },
}, {
    initialRouteName: 'Home',
});





















const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#EADCDB'
  
  },
  logo:{
    alignItems:"center",
    flexGrow:1,
    justifyContent:'center'
  },
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
      // color:'#eb0958',
      color:'#fff',
      fontSize:27,
      fontWeight:"bold",
      bottom:10,
      marginTop:10,
      opacity:0.6
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
      top:2
    },
    btntext:{
      justifyContent:"center",
      alignItems:"center",
      color:'white',
      fontSize:20,
      fontWeight:'bold',
      textAlign:"center" 
    },

    /////SignUp style sheet
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
      backgroundColor: '#ECDEDE',
      paddingLeft: 60,
      paddingRight: 60,
   },

  

});

AppRegistry.registerComponent('App',() => App)


export default createAppContainer(AppNavigator);