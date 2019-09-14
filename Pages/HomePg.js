import React from 'react';
import {StyleSheet,Text,View,Image,SafeAreaView,ScrollView,Button,Dimensions,TouchableOpacity} from 'react-native';
import {Header,Right,Left,Icon} from 'native-base';
import BeforeLike from '../images/lyk.png';
import chat from '../images/chatt.png';
import Logo from '../images/logo.png';
import AfterLike from '../images/like.png';
import AddCart from '../images/cartt.jpg';
import Order1 from '../images/order1.jpg';
import Order2 from '../images/order5.jpg';
import Order3 from '../images/order6.jpg';
import brand from '../images/brand.gif';
import home from '../images/home.png';
import menu from '../images/menu.png';



class HomePage extends React.Component{
   static navigationOptions = {
      drawerIcon: ({tintColor}) => (
         <Image source={home} style={{ height:30, width:30, margin:5,color:'tintColor'}}/>
      )
   }

    render(){
   return(
         <View style={styles.container}>
            <Header style={{backgroundColor:'#DDA0DD'}}>
               <TouchableOpacity  style={{position:'absolute',left:10}} onPress={()=>this.props.navigation.openDrawer()}>
               <Image source={menu} style={{ height:30, width:30, marginTop:12}}/>
               </TouchableOpacity>
                   <Image source={Logo} style={{height:50,width:80,padding:5,margin:5,position:'absolute',left:280}}/>
             </Header>
<ScrollView>
            <View style={styles.subContainer}>
               <View style={styles.subTopContainer}>
                   <Image source={brand} style={{height:50,width:50,borderRadius:5,borderColor:'#000000'}}/>
                   <Text style={{fontSize:18,fontWeight:'bold',width:200}}>Sana's Clothing</Text>
                  </View> 
            <Text style={{width:250,marginLeft:3}}>Cloth Type:- Cotton</Text>
            <Text style={{width:250,marginLeft:3}}>Available Sizes:- Small and Medium</Text>
            <Text style={{width:250,marginLeft:3}}>Price:- PKR. 7000</Text>
            <Image source={Order1} style={{width:380,height:320,margin:5,padding:5}}/>
            <View style={styles.subBottomContainer}>
            <TouchableOpacity>
                  <Image source={BeforeLike} style={styles.ImageIconStyle}/>
              </TouchableOpacity>   

              <TouchableOpacity>
                   <Image source={chat} style={styles.ImageIconStyle}/>
              </TouchableOpacity>

              <TouchableOpacity>
                   <Image source={AddCart} style={styles.ImageIconStyle}/>
              </TouchableOpacity>

                <TouchableOpacity style={{position:'absolute',left:270, height: 29,width: 100,margin:2}}>
                 <Button title='Purchase' onPress={()=>{alert('Uploaded!')}}/>
              </TouchableOpacity>  
            </View>

            </View>


            <View style={styles.subContainer}>
               <View style={styles.subTopContainer}>
                   <Image source={brand} style={{height:50,width:50,borderRadius:5,borderColor:'#000000'}}/>
                   <Text style={{fontSize:18,fontWeight:'bold',width:200}}>Farah's Wardrobe</Text>
                  </View> 
            <Text style={{width:250,marginLeft:3}}>Cloth Type:- Barnarsi</Text>
            <Text style={{width:250,marginLeft:3}}>Available Sizes:- Small and Medium</Text>
            <Text style={{width:250,marginLeft:3}}>Price:- PKR. 10000</Text>
            <Image source={Order2} style={{width:380,height:320,margin:5,padding:5}}/>
            <View style={styles.subBottomContainer}>
            <TouchableOpacity onPress={()=>{AfterLike}}>
                  <Image source={BeforeLike} style={styles.ImageIconStyle}/>
              </TouchableOpacity>   

              <TouchableOpacity>
                   <Image source={chat} style={styles.ImageIconStyle}/>
              </TouchableOpacity>

              <TouchableOpacity>
                   <Image source={AddCart} style={styles.ImageIconStyle}/>
              </TouchableOpacity>

              <TouchableOpacity style={{position:'absolute',left:270, height: 29,width: 100,margin:2}}>
                 <Button title='Purchase' onPress={()=>{alert('Uploaded!')}}/>
              </TouchableOpacity>      
            </View>

            </View>



            <View style={styles.subContainer}>
               <View style={styles.subTopContainer}>
                   <Image source={brand} style={{height:50,width:50,borderRadius:5,borderColor:'#000000'}}/>
                   <Text style={{fontSize:18,fontWeight:'bold',width:200}}>Farah's Wardrobe</Text>
                  </View> 
            <Text style={{width:250,marginLeft:3}}>Cloth Type:- Lawn</Text>
            <Text style={{width:250,marginLeft:3}}>Available Sizes:- Small and Medium</Text>
            <Text style={{width:250,marginLeft:3}}>Price:- PKR. 7000</Text>
            <Image source={Order3} style={{width:380,height:320,margin:5,padding:5}}/>
            <View style={styles.subBottomContainer}>
            <TouchableOpacity>
                  <Image source={BeforeLike} style={styles.ImageIconStyle}/>
              </TouchableOpacity>   

              <TouchableOpacity>
                   <Image source={chat} style={styles.ImageIconStyle}/>
              </TouchableOpacity>

              <TouchableOpacity>
                   <Image source={AddCart} style={styles.ImageIconStyle}/>
              </TouchableOpacity>

              <TouchableOpacity style={{position:'absolute',left:270, height: 29,width: 100,margin:2}}>
                 <Button title='Purchase' onPress={()=>{alert('Uploaded!')}}/>
              </TouchableOpacity>     
            </View>

            </View>



            </ScrollView>

         </View>
      );
   }
}


export default HomePage;
const styles = StyleSheet.create({
      container:{
         flex:1,
      },
     subContainer:{
      elevation:5,
      height:480,
      width:100,
      margin:2,
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
      margin:2,
      padding:5
   },
   ImageIconStyle: {
      height: 29,
      width: 35,
      margin:2
    },
    BtnStyle:{
      height: 29,
      width: 100,
      margin:2,

    },

})