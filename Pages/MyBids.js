import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,ScrollView,TextInput,Button} from 'react-native';
import {Header,Right,Left,Icon} from 'native-base';
import Logo from '../images/logo.png';
import Order1 from '../images/order1.jpg';
import bid from '../images/bid.png';
import menu from '../images/menu.png';

class MyBids extends React.Component{
   static navigationOptions = {
      drawerIcon: ({tintColor}) => (
         <Image source={bid} style={{ height:30, width:30, margin:5,color:'tintColor'}}/>
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
               <View>
                   <Image source={Order1} style={{height:90,width:80,borderRadius:5,margin:10}}/>
                   <Text style={{fontSize:16,fontWeight:'bold',width:200,position:'absolute',left:250,top:10}}>Order ID: 103455</Text>
                  </View> 
                  <View style={styles.BidingPost}>      
            <Text style={{width:350,padding:10,margin:8,fontWeight:'bold',fontSize:16}}>Farah's Wardrobe</Text>
            <Text style={{width:350,padding:10,margin:8,fontSize:16,position:'absolute',top:20}}>Bid: 7000</Text>
           <TouchableOpacity style={{flex:1,flexDirection:'row',position:'absolute',left:200,top:20}}>
               <Button title='Accept'/>
               </TouchableOpacity>
               <TouchableOpacity style={{flex:1,flexDirection:'row',position:'absolute',left:270,top:20}}>
              <Button title='Decline'/>
            </TouchableOpacity>
            </View>
           

            <View style={styles.BidingPost}>      
            <Text style={{width:350,padding:10,margin:8,fontWeight:'bold',fontSize:16}}>Ali Fashion</Text>
            <Text style={{width:350,padding:10,margin:8,fontSize:16,position:'absolute',top:20}}>Bid: 7500</Text>
           <TouchableOpacity style={{flex:1,flexDirection:'row',position:'absolute',left:200,top:20}}>
               <Button title='Accept'/>
               </TouchableOpacity>
               <TouchableOpacity style={{flex:1,flexDirection:'row',position:'absolute',left:270,top:20}}>
              <Button title='Decline'/>
            </TouchableOpacity>
            </View>


            <View style={styles.BidingPost}>      
            <Text style={{width:350,padding:10,margin:8,fontWeight:'bold',fontSize:16}}>Syed Clothing</Text>
            <Text style={{width:350,padding:10,margin:8,fontSize:16,position:'absolute',top:20}}>Bid: 6000</Text>
           <TouchableOpacity style={{flex:1,flexDirection:'row',position:'absolute',left:200,top:20}}>
               <Button title='Accept'/>
               </TouchableOpacity>
               <TouchableOpacity style={{flex:1,flexDirection:'row',position:'absolute',left:270,top:20}}>
              <Button title='Decline'/>
            </TouchableOpacity>
            </View>


          </View>





          <View style={styles.subContainer}>
               <View>
                   <Image source={Order1} style={{height:90,width:80,borderRadius:5,margin:10}}/>
                   <Text style={{fontSize:16,fontWeight:'bold',width:200,position:'absolute',left:250,top:10}}>Order ID: 148455</Text>
                  </View> 
                  <View style={styles.BidingPost}>      
            <Text style={{width:350,padding:10,margin:8,fontWeight:'bold',fontSize:16}}>Farah's Wardrobe</Text>
            <Text style={{width:350,padding:10,margin:8,fontSize:16,position:'absolute',top:20}}>Bid: 7000</Text>
           <TouchableOpacity style={{flex:1,flexDirection:'row',position:'absolute',left:200,top:20}}>
               <Button title='Accept'/>
               </TouchableOpacity>
               <TouchableOpacity style={{flex:1,flexDirection:'row',position:'absolute',left:270,top:20}}>
              <Button title='Decline'/>
            </TouchableOpacity>
            </View>
           

            <View style={styles.BidingPost}>      
            <Text style={{width:350,padding:10,margin:8,fontWeight:'bold',fontSize:16}}>Ali Fashion</Text>
            <Text style={{width:350,padding:10,margin:8,fontSize:16,position:'absolute',top:20}}>Bid: 7500</Text>
           <TouchableOpacity style={{flex:1,flexDirection:'row',position:'absolute',left:200,top:20}}>
               <Button title='Accept'/>
               </TouchableOpacity>
               <TouchableOpacity style={{flex:1,flexDirection:'row',position:'absolute',left:270,top:20}}>
              <Button title='Decline'/>
            </TouchableOpacity>
            </View>


            <View style={styles.BidingPost}>      
            <Text style={{width:350,padding:10,margin:8,fontWeight:'bold',fontSize:16}}>Syed Clothing</Text>
            <Text style={{width:350,padding:10,margin:8,fontSize:16,position:'absolute',top:20}}>Bid: 6000</Text>
           <TouchableOpacity style={{flex:1,flexDirection:'row',position:'absolute',left:200,top:20}}>
               <Button title='Accept'/>
               </TouchableOpacity>
               <TouchableOpacity style={{flex:1,flexDirection:'row',position:'absolute',left:270,top:20}}>
              <Button title='Decline'/>
            </TouchableOpacity>
            </View>


          </View>



          <View style={styles.subContainer}>
               <View>
                   <Image source={Order1} style={{height:90,width:80,borderRadius:5,margin:10}}/>
                   <Text style={{fontSize:16,fontWeight:'bold',width:200,position:'absolute',left:250,top:10}}>Order ID: 348453</Text>
                  </View> 
                  <View style={styles.BidingPost}>      
            <Text style={{width:350,padding:10,margin:8,fontWeight:'bold',fontSize:16}}>Farah's Wardrobe</Text>
            <Text style={{width:350,padding:10,margin:8,fontSize:16,position:'absolute',top:20}}>Bid: 7000</Text>
           <TouchableOpacity style={{flex:1,flexDirection:'row',position:'absolute',left:200,top:20}}>
               <Button title='Accept'/>
               </TouchableOpacity>
               <TouchableOpacity style={{flex:1,flexDirection:'row',position:'absolute',left:270,top:20}}>
              <Button title='Decline'/>
            </TouchableOpacity>
            </View>
           

            <View style={styles.BidingPost}>      
            <Text style={{width:350,padding:10,margin:8,fontWeight:'bold',fontSize:16}}>Ali Fashion</Text>
            <Text style={{width:350,padding:10,margin:8,fontSize:16,position:'absolute',top:20}}>Bid: 7500</Text>
           <TouchableOpacity style={{flex:1,flexDirection:'row',position:'absolute',left:200,top:20}}>
               <Button title='Accept'/>
               </TouchableOpacity>
               <TouchableOpacity style={{flex:1,flexDirection:'row',position:'absolute',left:270,top:20}}>
              <Button title='Decline'/>
            </TouchableOpacity>
            </View>


            <View style={styles.BidingPost}>      
            <Text style={{width:350,padding:10,margin:8,fontWeight:'bold',fontSize:16}}>Syed Clothing</Text>
            <Text style={{width:350,padding:10,margin:8,fontSize:16,position:'absolute',top:20}}>Bid: 6000</Text>
           <TouchableOpacity style={{flex:1,flexDirection:'row',position:'absolute',left:200,top:20}}>
               <Button title='Accept'/>
               </TouchableOpacity>
               <TouchableOpacity style={{flex:1,flexDirection:'row',position:'absolute',left:270,top:20}}>
              <Button title='Decline'/>
            </TouchableOpacity>
            </View>


          </View>
</ScrollView>
</View>
     
      );
   }
}

export default MyBids;

const styles = StyleSheet.create({
   container:{
      flex:1,
   },
   subContainer:{
      height:300,
      width:420,
      backgroundColor:'#fff',
   },
   btnStyle:{
      flex:1,
      flexDirection:'row',
      margin:20,
      padding:10,

    },
    BidingPost:{
       elevation:4,
       height:50,
    }
})