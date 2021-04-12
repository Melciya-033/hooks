
import React, {useState} from 'react';
import { StyleSheet, TextInput,Text,View,TouchableOpacity} from 'react-native';
 interface State {
    showPassword: boolean;
   username: string;
   password: string;
}
  export default function App() {
    const [state, setState] = useState<State>({
      showPassword: false,
      username: '',
       password: '',
   }
    );
     function onEmailChange(username: string) {
       setState({...state, username: username});
      
     }
     function onPasswordChange(password: string) {
       setState({...state, password: password});
     }
     function login(){
       console.log({onEmailChange});
       console.log({onPasswordChange});
     }
  
    return (
      
       <View style={styles.container}>
    
      
    <View style={styles.label}>
      <Text style={styles.inputLabel}>UserName</Text>
    </View>
     <TextInput style={styles.input} placeholder='UserName' 
     onChangeText={(val) => onEmailChange(val)} > </TextInput>
     <View style={styles.label}>
      <Text style={styles.inputLabel}>Password</Text>
    </View>
     <TextInput style={styles.input} placeholder='Password' 
     onChangeText={(val) => onPasswordChange(val)} > </TextInput>
     <View style={styles.btncontainer}>
        <TouchableOpacity  style={styles.btn}>
       <Text style={styles.btntext }onPress={login}>Login</Text>
       </TouchableOpacity>
       </View>
     </View>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
       flex:1,
        justifyContent:'center',
      //  alignItems:'center',
       backgroundColor:'red',
        padding:15,
        
    },
    
      
     inputLabel: {
      color: 'black',
      fontWeight: '300',
      fontSize: 24,
      // textAlign:'left'
      alignContent:'flex-start',
      marginLeft:10
     },
     label:{
    
      alignItems:'flex-start',
     },
    input:{
      width:'90%',
    // color:'black',
      backgroundColor:'#fff',
      padding:10,
      marginBottom:10,
     marginLeft:10
    },
    btn:{
      backgroundColor:'white',
      padding:15,
      width:'50%',
      marginTop:10
          },
   btncontainer:{
     width:'50%',
     alignItems:'center'
   },
   btntext:{
   fontSize:20,
   textAlign:'center',
   color:'black'
   }
  });
  