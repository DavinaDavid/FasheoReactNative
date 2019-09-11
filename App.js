import React from 'react';
import {StyleSheet,Text,View,SafeAreaView,ScrollView,Dimensions,Image} from 'react-native';
import {createDrawerNavigator,DrawerItems} from 'react-navigation';
import HomeScreen from './Pages/HomeScreen';
import OrderUpload from './Pages/OrderUpload';



export default class App extends React.Component{
   render(){
      return(
         <AppDrawerNavigator/>
     
      );
   }
}
const CustomDrawer = (props)=>(
   <SafeAreaView style={{flex:1}}>
   <View style={{height:180,backgroundColor:'#DDA0DD'}}>
      <Image source={require('./images/user.jpg')} style={{height:120,width:120,borderRadius:60, justifyContent:'center'}} />
  <Text style={{paddingTop:3}}>UserName</Text>
  <Text>Email ID</Text>
   </View>
   <ScrollView>
      <DrawerItems {...props}/>
   </ScrollView>
</SafeAreaView>
)
 

const AppDrawerNavigator = createDrawerNavigator({
   Home: HomeScreen,
   UploadOrder: OrderUpload
},{
   contentComponent: CustomDrawer,
   contentOptions:{
      activeTintColor:'purple'
   }
})
