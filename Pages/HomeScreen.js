import React from 'react';
import {StyleSheet,Text,View,Image,SafeAreaView,ScrollView,Dimensions,TouchableOpacity} from 'react-native';
import {Header,Right,Left,Icon, Button} from 'native-base';
import BeforeLike from '../images/BeforeLyk.png';
import Logo from '../images/logo.png';
import AfterLike from '../images/AfterLyk.png';
import AddCart from '../images/AddCart.png';
import Order1 from '../images/order1.jpg';
import brand from '../images/brand.gif';

class HomeScreen extends React.Component{
   static navigationOptions = {
      drawerIcon: ({tintColor}) => (
         <Icon name="home" style={{fontSize:24,color:'tintColor'}}/>
      )
   }
  
   render(){
      return(
         <View style={styles.container}>
            <Header style={{backgroundColor:'#DDA0DD'}}>
                   <Icon style={{position:'absolute',left:8}} name="menu" onPress={()=>this.props.navigation.openDrawer()}/>
                   <Image source={Logo} style={{height:50,width:80,padding:3,position:'absolute',left:40}}/>
              </Header>
            <SafeAreaView>
<ScrollView>
            <View style={styles.subContainer}>
               <View style={styles.subTopContainer}>
                   <Image source={brand} style={{height:50,width:50,borderRadius:5,borderColor:'#000000'}}/>
                   <Text style={{fontSize:16,fontWeight:'bold',width:200}}>Sana's Clothing</Text>
                  </View> 
            <Text style={{width:250,padding:0,margin:0}}>Cloth Type:- Cotton</Text>
            <Text style={{width:250}}>Available Sizes:- Small and Medium</Text>
            <Text style={{width:250}}>Price:- PKR. 7000</Text>
            <Image source={Order1} style={{width:380,height:320,margin:5,padding:5}}/>
            <View>
            <TouchableOpacity style={styles.subBottomContainer} activeOpacity={0.5}>
    <Image source={BeforeLike} style={styles.ImageIconStyle}/>
    <Image source={AddCart} style={styles.ImageIconStyle}/>
    <Image source={BeforeLike} style={styles.ImageIconStyle}/>
    <Button style={{width:80,height:28,padding:3,jusifyContent:'space-between',fontWeight:'bold',fontSize:16}} title="Purchase" onPress={()=>{alert('Purchased!')}}/>
               </TouchableOpacity>   
            </View>
            </View>


            <View style={styles.subContainer}>
               <View style={styles.subTopContainer}>
                   <Image source={brand} style={{height:50,width:50,borderRadius:5,borderColor:'#000000'}}/>
                   <Text style={{fontSize:16,fontWeight:'bold',width:200}}>Sana's Clothing</Text>
                  </View> 
            <Text style={{width:250,padding:0,margin:0}}>Cloth Type:- Cotton</Text>
            <Text style={{width:250}}>Available Sizes:- Small and Medium</Text>
            <Text style={{width:250}}>Price:- PKR. 7000</Text>
            <Image source={Order1} style={{width:380,height:320,margin:5,padding:5}}/>
            <View>
            <TouchableOpacity style={styles.subBottomContainer} activeOpacity={0.5}>
    <Image source={BeforeLike} style={styles.ImageIconStyle}/>
    <Image source={AddCart} style={styles.ImageIconStyle}/>
    <Image source={BeforeLike} style={styles.ImageIconStyle}/>
    <Button style={{width:80,height:28,padding:3,jusifyContent:'space-between',fontWeight:'bold',fontSize:16}} title="Purchase" onPress={()=>{alert('Purchased!')}}/>
               </TouchableOpacity>    
            </View>
            </View>



            </ScrollView>

            </SafeAreaView>
         </View>
      );
   }
}

export default HomeScreen;
const styles = StyleSheet.create({
      container:{
         flex:1,
      },
     subContainer:{
      elevation:4,
      height:480,
      width:100
   },
   subTopContainer:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      height:50,
      margin:5,
      padding:5
   },

   subBottomContainer:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      height:50,
      margin:5,
      padding:5
   },
   ImageIconStyle: {
      height: 28,
      width: 35,
      resizeMode: 'stretch',
    },
})