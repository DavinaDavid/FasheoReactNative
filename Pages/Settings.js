import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput,Button} from 'react-native';
import {Header,Right,Left,Icon} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import Logo from '../images/logo.png';
import userImg from '../images/user.jpg';
import setting from '../images/settingg.png';
import menu from '../images/menu.png';


const options={
   title:'My Camera',
   takePhotoButtonTitle:'Take Photo',
   chooseFromLibraryButtonTitle:'Open Photo Gallery',
 }


class Settings extends React.Component{
     constructor(){
        super()
        this.state={
           show:true,
           avatarSource:userImg,
        }
      
       }
       ImagePicking=()=>{
         ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
        
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } 
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } 
           else {
            const source = { uri: response.uri };
        
            this.setState({
              avatarSource: source,
            });
          }
        });
        }

    
     static navigationOptions = {
      drawerIcon: ({tintColor}) => (
         <Image source={setting} style={{ height:30, width:30, margin:5,color:'tintColor'}}/>
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
            
            <View style={{height:200,width:420,elevation:4}}>
           <TouchableOpacity onPress={this.ImagePicking}>
            <Image source={this.state.avatarSource} style={{width:180,height:155,margin:20,padding:10,marginLeft:100,justifyContent:'center',borderRadius:20}} />     
           </TouchableOpacity>
      </View>
      <Text style={{fontSize:18,fontWeight:'bold',margin:6}}>Edit UserName</Text>
      <View>
      <TextInput style={styles.inputStyle2} placeholder={'Reset UserName'} placeholderTextColor={'#4d3439'} underlineColorAndroid='transparent'/>
      <TouchableOpacity style={styles.loginbtn}>
            <Button  title='Set' />
         </TouchableOpacity>
      </View>
      

      <View style={styles.subContainer}>
        <Text style={{fontSize:18,fontWeight:'bold',margin:6}}>Update Password</Text>
        <View>
           <TextInput style={styles.inputStyle2} placeholder={'Current Password'} placeholderTextColor={'#4d3439'} secureTextEntry={true} underlineColorAndroid='transparent'/>
           <TextInput style={styles.inputStyle2}  placeholder={'Set New Password'} placeholderTextColor={'#4d3439'} secureTextEntry={true} underlineColorAndroid='transparent'/>
           <TextInput style={styles.inputStyle2} placeholder={'Rewrite New Password'} placeholderTextColor={'#4d3439'} secureTextEntry={true} underlineColorAndroid='transparent'/>
           
         <TouchableOpacity style={styles.loginbtn}>
            <Button  title='Set' />
         </TouchableOpacity>
        </View>
         </View>

       <View>
       <TouchableOpacity style={{justifyContent:'center',padding:20,margin:20,marginLeft:80,width:200}}>
            <Button title='Save Changes'/>
         </TouchableOpacity>
          
          </View> 
          
          <TouchableOpacity style={{justifyContent:'center',padding:20,margin:10,width:350}}>
            <Button title='Logout'/>
         </TouchableOpacity>
         </View>
      );
   }
}

export default Settings;

const styles = StyleSheet.create({
   container:{
      flex:1,
   },
   inputStyle2:{
      height:40,
      paddingLeft:45,
      color:'#fff',
      top:5
    },
    loginbtn:{
      width:100,
      height:45,
      justifyContent:"center",
      marginTop:5,
      left:240,
    },
    subContainer:{
      height:200,
      width:420,
      backgroundColor:'#fff',
      elevation:4,
   },

   userImg:{
      width:30,
      height:20,
      borderRadius:5,
      justifyContent:'center',
   }
})