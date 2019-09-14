import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput,Button} from 'react-native';
import {Header,Right,Left,Icon} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import Logo from '../images/logo.png';
import UploadIcon from '../images/upload.png';
import menu from '../images/menu.png';

const options={
   title:'My Camera',
   takePhotoButtonTitle:'Take Photo',
   chooseFromLibraryButtonTitle:'Open Photo Gallery',
 }

class OrderUpload extends React.Component{
   static navigationOptions = {
      drawerIcon: ({tintColor}) => (
         <Image source={UploadIcon} style={{ height:30, width:30, margin:5,color:'tintColor'}}/>
         )
   }
   constructor(props){
      super(props);
      this.state={
        avatarSource:null
      }
    }
    OrderUploaded=()=>{
      alert('Order Uploaded!')
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
   render(){
      return(
      <View style={styles.container}>
              <Header style={{backgroundColor:'#DDA0DD'}}>
               <TouchableOpacity  style={{position:'absolute',left:10}} onPress={()=>this.props.navigation.openDrawer()}>
               <Image source={menu} style={{ height:30, width:30, marginTop:12}}/>
               </TouchableOpacity>
                   <Image source={Logo} style={{height:50,width:80,padding:5,margin:5,position:'absolute',left:280}}/>
             </Header>
            
            <TextInput style={{width:380,height:80,margin:5,padding:5}} placeholder='Add Some Description'></TextInput>
           <TouchableOpacity style={{backgroundColor:'#778899',margin:5,padding:10}} onPress={this.ImagePicking}>
             <Text style={{fontWeight:'bold',fontSize:16}}>Select Image</Text>   
           </TouchableOpacity>
           <Image source={this.state.avatarSource} style={{width:380,height:470,margin:5,padding:10}}/>     
           <TouchableOpacity style={{justifyContent:'center',padding:20,margin:10,width:350}}>
            <Button title='Upload Order' onPress={()=>{alert('Uploaded!')}}/>
         </TouchableOpacity>
         </View>
      );
   }
}

export default OrderUpload;

const styles = StyleSheet.create({
   container:{
      flex:1,
   },
})