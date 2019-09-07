import React,{Component} from 'react';
import {Text,View,Button} from 'react-native';
import {withNavigation} from 'react-navigation';


type props={};
class Login extends Component<props>{

    render(){
        return(
            <View style={{backgroundColor:'Blue',flex:1}}>
                <Text>Login</Text>
                <Button title="Show Drawer" onPress={()=> this.props.navigation.toggleDrawer()}/>
                <Button title="Home" onPress={()=> this.props.navigation.navigate('Home')}/>
            </View>
        );
    }
}
export default withNavigation(Login);