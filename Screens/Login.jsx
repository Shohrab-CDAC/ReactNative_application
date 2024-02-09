import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { login } from '../Service/user'
import EncryptedStorage from 'react-native-encrypted-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login({navigation}) {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    let onLogin = async ()=>{
      
       let response = await login(email,password)
    
        if(response === null)
        {
          Alert.alert("SERVER ERROR")
        }
        else if(response.data.length === 0)
        {
          Alert.alert("invalid credentials")
        }else{
          await EncryptedStorage.setItem("applicantId",response.data[0].applicant_id+"")
          Alert.alert("Login Successfull")
          navigation.replace("home")
        }
    
    }
  return (

    <>
    <View style={styles.container}>
      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.input} autoFocus onChangeText={(e)=>{setEmail(e)}}></TextInput>

      <Text style={styles.text}>Password</Text>
     
            <TextInput style={styles.input} secureTextEntry={true} onChangeText={(e)=>{setPassword(e)}}></TextInput>  
      <View>
        <Button title="LOGIN" style={styles.button} onPress={onLogin}/>
        <View style={styles.button}></View>
        <Button title="REGISTER" style={styles.button}/>
      </View>
    </View>
   </>
   
  )
}

const styles = StyleSheet.create({

    container : {

      marginTop : 10,
      flex : 1,
      padding :16

    },

    input : {
      borderColor : "grey",
      borderRadius : 5,
      borderWidth : 1,
      fontSize : 18,
      marginBottom : 5
      
    },

    text : {
      color : "black",
      fontSize : 18
    },

    button : {

      marginVertical : 8
    }




})
