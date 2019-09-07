import React from 'react';
import { View, Text, Button ,Image, StyleSheet,AppRegistry,StatusBar} from 'react-native';
import { createAppContainer , NavigationActions, StackActions} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
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

        },5000

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go Back"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))
          }}
        />
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
    title:'Login Screen',
    screen: DetailsScreen,
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
    
  }

});

AppRegistry.registerComponent('App',() => App)


export default createAppContainer(AppNavigator);