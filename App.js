import React from 'react';
import {StyleSheet,Text,View,SafeAreaView,ScrollView,Dimensions,Image} from 'react-native';
import {createDrawerNavigator,DrawerItems} from 'react-navigation';
import HomePage from './Pages/HomePg';
import OrderUpload from './Pages/OrderUpload';
import WishList from './Pages/WishList';
import MyBids from './Pages/MyBids';
import Settings from './Pages/Settings';

export default class App extends React.Component{
   render(){
      return(
         <AppDrawerNavigator/>
     
      );
   }
}
const CustomDrawer = (props)=>(
   <SafeAreaView style={{flex:1}}>
   <View style={{height:200,backgroundColor:'#DDA0DD'}}>
      <Image source={require('./images/user.jpg')} style={{height:120,width:120,borderRadius:60, justifyContent:'center',margin:4}} />
  <Text style={{margin:5,paddingLeft:2}}>UserName</Text>
  <Text style={{margin:5,paddingLeft:2}}>Email ID</Text>
   </View>
   <ScrollView>
      <DrawerItems {...props}/>
   </ScrollView>
</SafeAreaView>
)
 

const AppDrawerNavigator = createDrawerNavigator({
   Home: HomePage,
   UploadOrder: OrderUpload,
   MyOrderBids:MyBids,
   WishList: WishList,
   Settings: Settings,

},{
   contentComponent: CustomDrawer,
   contentOptions:{
      activeTintColor:'purple'
   }
})
