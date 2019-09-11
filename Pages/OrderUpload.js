import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput,Button} from 'react-native';
import {Header,Right,Left,Icon} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import Logo from '../images/logo.png';

const options={
   title:'My Camera',
   takePhotoButtonTitle:'Take Photo',
   chooseFromLibraryButtonTitle:'Open Photo Gallery',
 }

class OrderUpload extends React.Component{
   static navigationOptions = {
      drawerIcon: ({tintColor}) => (
         <Icon name="Upload" style={{fontSize:24,color:'tintColor'}}/>
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
                  <Icon style={{position:'absolute',left:8}} name="menu" onPress={()=>this.props.navigation.openDrawer()}/>
                  <Image source={Logo} style={{height:50,width:80,padding:3,position:'absolute',left:40}}/>
            </Header>
            
            <TextInput style={{width:380,height:80,margin:5,padding:5}} placeholder='Add Some Description'></TextInput>
           <TouchableOpacity style={{backgroundColor:'#778899',margin:5,padding:10}} onPress={this.ImagePicking}>
             <Text style={{fontWeight:'bold',fontSize:14}}>Select Image</Text>   
           </TouchableOpacity>
           <Image source={this.state.avatarSource} style={{width:380,height:450,margin:5,padding:10}}/>     
           <Button style={{width:100,height:150,margin:5,padding:5,jusifyContent:'center',fontWeight:'bold',fontSize:24}} title="Upload Order" onPress={this.OrderUploaded}/>
      
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