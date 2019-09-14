import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput,CheckBox,Button,SafeAreaView,ScrollView} from 'react-native';
import {Header,Right,Left,Icon} from 'native-base';
import Logo from '../images/logo.png';
import Order1 from '../images/order1.jpg';
import wishlist from '../images/wishlist.png';
import menu from '../images/menu.png';

class WishList extends React.Component{
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
         <Image source={wishlist} style={{ height:30, width:30, margin:5,color:'tintColor'}}/>
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
            
            <View style={{height:30,width:100,elevation:4}}>
         <CheckBox style={{flex: 1, padding: 10}}/>

        <Text style={{position:'absolute',right:-270,fontSize:16}}>Delete</Text>
            </View>
            <SafeAreaView>
      <ScrollView>

          <View style={styles.subContainer}>
          <CheckBox style={{flex:1,padding:5}}/>
            <View style={{flex: 1,flexDirection: 'column', height:300,width:100,position:'absolute',left:0}}>
           <Image source={Order1} style={styles.ImageContainer}/>
         
            </View>
           <View style={{flex: 1,flexDirection: 'column', height:300,width:100,position:'absolute',left:140,top:12}}>
            <Text style={{fontSize:16,fontWeight:'bold',width:200,justifyContent:'flex-start'}}>Sana's Clothing</Text>
            <Text style={{width:200}}>Size:-Medium</Text>
            <Text style={{width:250}}>Clothing Type:-Cotton</Text>
            <Text style={{width:250}}>Clothing Category:-Stitched</Text>
            <Text style={{position:'absolute',top:100,fontSize:14,fontWeight:'bold'}}>PKR. 7000</Text>
            
            <TouchableOpacity style={{flex: 1,flexDirection: 'row',position:'absolute',top:80,right:-150}}>
              <Button style={styles.btnStyle} title='+'/>
              <Text style={{backgroundColor:'#COCOCO',fontSize:16,width:15,justifyContent:'center',margin:5}}>1</Text>
              <Button style={styles.btnStyle} title='-'/>
              </TouchableOpacity>
              </View>
          </View>


          <View style={styles.subContainer}>
          <CheckBox style={{flex:1,padding:5}}/>
            <View style={{flex: 1,flexDirection: 'column', height:300,width:100,position:'absolute',left:0}}>
           <Image source={Order1} style={styles.ImageContainer}/>
         
            </View>
           <View style={{flex: 1,flexDirection: 'column', height:300,width:100,position:'absolute',left:140,top:12}}>
            <Text style={{fontSize:16,fontWeight:'bold',width:200,justifyContent:'flex-start'}}>Sana's Clothing</Text>
            <Text style={{width:200}}>Size:-Medium</Text>
            <Text style={{width:250}}>Clothing Type:-Cotton</Text>
            <Text style={{width:250}}>Clothing Category:-Stitched</Text>
            <Text style={{position:'absolute',top:100,fontSize:14,fontWeight:'bold'}}>PKR. 7000</Text>
            
            <TouchableOpacity style={{flex: 1,flexDirection: 'row',position:'absolute',top:80,right:-150}}>
              <Button style={styles.btnStyle} title='+'/>
              <Text style={{backgroundColor:'#COCOCO',fontSize:16,width:15,justifyContent:'center',margin:5}}>1</Text>
              <Button style={styles.btnStyle} title='-'/>
              </TouchableOpacity>
              </View>
          </View>


          <View style={styles.subContainer}>
          <CheckBox style={{flex:1,padding:5}}/>
            <View style={{flex: 1,flexDirection: 'column', height:300,width:100,position:'absolute',left:0}}>
           <Image source={Order1} style={styles.ImageContainer}/>
         
            </View>
           <View style={{flex: 1,flexDirection: 'column', height:300,width:100,position:'absolute',left:140,top:12}}>
            <Text style={{fontSize:16,fontWeight:'bold',width:200,justifyContent:'flex-start'}}>Sana's Clothing</Text>
            <Text style={{width:200}}>Size:-Medium</Text>
            <Text style={{width:250}}>Clothing Type:-Cotton</Text>
            <Text style={{width:250}}>Clothing Category:-Stitched</Text>
            <Text style={{position:'absolute',top:100,fontSize:14,fontWeight:'bold'}}>PKR. 7000</Text>
            
            <TouchableOpacity style={{flex: 1,flexDirection: 'row',position:'absolute',top:80,right:-150}}>
              <Button style={styles.btnStyle} title='+'/>
              <Text style={{backgroundColor:'#COCOCO',fontSize:16,width:15,justifyContent:'center',margin:5}}>1</Text>
              <Button style={styles.btnStyle} title='-'/>
              </TouchableOpacity>
              </View>
          </View>



          <View style={styles.subContainer}>
          <CheckBox style={{flex:1,padding:5}}/>
            <View style={{flex: 1,flexDirection: 'column', height:300,width:100,position:'absolute',left:0}}>
           <Image source={Order1} style={styles.ImageContainer}/>
         
            </View>
           <View style={{flex: 1,flexDirection: 'column', height:300,width:100,position:'absolute',left:140,top:12}}>
            <Text style={{fontSize:16,fontWeight:'bold',width:200,justifyContent:'flex-start'}}>Sana's Clothing</Text>
            <Text style={{width:200}}>Size:-Medium</Text>
            <Text style={{width:250}}>Clothing Type:-Cotton</Text>
            <Text style={{width:250}}>Clothing Category:-Stitched</Text>
            <Text style={{position:'absolute',top:100,fontSize:14,fontWeight:'bold'}}>PKR. 7000</Text>
            
            <TouchableOpacity style={{flex: 1,flexDirection: 'row',position:'absolute',top:80,right:-150}}>
              <Button style={styles.btnStyle} title='+'/>
              <Text style={{backgroundColor:'#COCOCO',fontSize:16,width:15,justifyContent:'center',margin:5}}>1</Text>
              <Button style={styles.btnStyle} title='-'/>
              </TouchableOpacity>
              </View>
          </View>



          <View style={styles.subContainer}>
          <CheckBox style={{flex:1,padding:5}}/>
            <View style={{flex: 1,flexDirection: 'column', height:300,width:100,position:'absolute',left:0}}>
           <Image source={Order1} style={styles.ImageContainer}/>
         
            </View>
           <View style={{flex: 1,flexDirection: 'column', height:300,width:100,position:'absolute',left:140,top:12}}>
            <Text style={{fontSize:16,fontWeight:'bold',width:200,justifyContent:'flex-start'}}>Sana's Clothing</Text>
            <Text style={{width:200}}>Size:-Medium</Text>
            <Text style={{width:250}}>Clothing Type:-Cotton</Text>
            <Text style={{width:250}}>Clothing Category:-Stitched</Text>
            <Text style={{position:'absolute',top:100,fontSize:14,fontWeight:'bold'}}>PKR. 7000</Text>
            
            <TouchableOpacity style={{flex: 1,flexDirection: 'row',position:'absolute',top:80,right:-150}}>
              <Button style={styles.btnStyle} title='+'/>
              <Text style={{backgroundColor:'#COCOCO',fontSize:16,width:15,justifyContent:'center',margin:5}}>1</Text>
              <Button style={styles.btnStyle} title='-'/>
              </TouchableOpacity>
              </View>
          </View>

        
          <View style={styles.subContainer}>
          <CheckBox style={{flex:1,padding:5}}/>
            <View style={{flex: 1,flexDirection: 'column', height:300,width:100,position:'absolute',left:0}}>
           <Image source={Order1} style={styles.ImageContainer}/>
         
            </View>
           <View style={{flex: 1,flexDirection: 'column', height:300,width:100,position:'absolute',left:140,top:12}}>
            <Text style={{fontSize:16,fontWeight:'bold',width:200,justifyContent:'flex-start'}}>Sana's Clothing</Text>
            <Text style={{width:200}}>Size:-Medium</Text>
            <Text style={{width:250}}>Clothing Type:-Cotton</Text>
            <Text style={{width:250}}>Clothing Category:-Stitched</Text>
            <Text style={{position:'absolute',top:100,fontSize:14,fontWeight:'bold'}}>PKR. 7000</Text>
            
            <TouchableOpacity style={{flex: 1,flexDirection: 'row',position:'absolute',top:80,right:-150}}>
              <Button style={styles.btnStyle} title='+'/>
              <Text style={{backgroundColor:'#COCOCO',fontSize:16,width:15,justifyContent:'center',margin:5}}>1</Text>
              <Button style={styles.btnStyle} title='-'/>
              </TouchableOpacity>
              </View>
          </View>


      </ScrollView>
      </SafeAreaView>

      <View style={styles.footer}>
          <Text style={{fontSize:14,justifyContent:'center',position:'absolute',left:80,width:160}}>Shipping Charges: PKR.0</Text>
          <Text style={{fontSize:16,fontWeight:'bold',justifyContent:'center',position:'absolute',left:80,width:160,top:20}}>Total: PKR.0</Text>
      <View  style={{position:'absolute',left:270,top:10,width:90}}>
       <Button title='CheckOut'/>
       </View>
      </View>
         </View>

      );
   }
}

export default WishList;

const styles = StyleSheet.create({
   container:{
      flex:1,
   },
   subContainer:{
    height:160,
    width:420,
    backgroundColor:'#fff',
 },
 ImageContainer:{
    height:120,
    width:100,
    margin:12,
    padding:5,
    position:'absolute',
    left:20,
 },

 btnStyle:{
     margin:5,
     backgroundColor:'#000000',
     resizeMode: 'stretch',

 },
 footer:{
   height:255,
   width:500,
   backgroundColor:'#fff',
   flex:1,
   flexDirection:'column',
   elevation:5,
   position:'absolute',
   top:700,
 }
 
})