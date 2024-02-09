import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { educationalDetails, getProfile } from '../Service/user'



export default function Profile() {

  const [profileDet,setProfileDet] = useState([])
  const [eduDet,setEduDet] = useState([])
  

 
  useEffect(()=>{
    
     getProfileDetails()
     getEducationalDetails()
   
  },[])

  let getEducationalDetails = async ()=>{

      const response = await educationalDetails();
      setEduDet(response.data)
  }

  let getProfileDetails= async ()=>
  {
      const response = await getProfile();
      setProfileDet(response.data);
     
  }

  
  if(profileDet.length === 0 )
  {
    return(<View><Text>Loading</Text></View>)
  }else if(eduDet.length === 0){
    return(<View><Text>Loading</Text></View>)
  }
  


  return (


    <View style={styles.container}> 
            {/* Profile Details View */}
          <View style={{padding : 10,backgroundColor : 'white'}}>
              <View style={{flexDirection : 'row',justifyContent : 'space-between'}}>
              <Text style={{color : 'black',marginBottom : 10,fontSize : 15,fontWeight : 500}}>Profile Details</Text>
              <Button title='Update'/>
          </View>
              <View style={styles.box}>
                <Text style={{marginRight : 100}}>Name :</Text>
                <Text>{profileDet[0].first_name}</Text>
              </View>
              <View style={styles.box}>
                <Text style={{marginRight : 69}}>Last Name :</Text>
                <Text>{profileDet[0].last_name}</Text>
              </View>
              <View style={styles.box}>
                <Text style={{marginRight : 102}}>Email :</Text>
                <Text>{profileDet[0].email}</Text>
              </View>
              <View style={styles.box}>
                <Text style={{marginRight : 88}}>Contact :</Text>
                <Text>{profileDet[0].contact_number}</Text>
              </View>
          </View> 


          <View style={{padding : 10,backgroundColor : 'white',marginVertical : 15}}>

              <View style={{flexDirection : 'row',justifyContent : 'space-between'}}>
                  <Text style={{color : 'black',marginBottom : 10,fontSize : 15,fontWeight : 500}}>Educational Details</Text>
                  <Button title='Update'/>
              </View> 
              <View style={styles.box}>
                <Text style={{marginRight : 101}}>Degree :</Text>
                <Text>{eduDet[0].degree_name}</Text>
              </View>
              <View style={styles.box}>
                <Text style={{marginRight : 84}}>University :</Text>
                <Text>{eduDet[0].university_name}</Text>
              </View>

              <View style={{flexDirection : 'row',justifyContent : 'space-evenly'}}>
                <Text>From : </Text>
                <Text >{eduDet[0].start_date.substring(0,10)}</Text>
                <Text>To</Text>
                <Text>{eduDet[0].completion_date.substring(0,10)}</Text>
              </View>

              <View style={styles.box}>
                <Text style={{marginRight : 74}}>Percentage :</Text>
                <Text>{eduDet[0].percentage}%</Text>
              </View>
              <View style={styles.box}>
                <Text style={{marginRight : 115}}>Skills :</Text>
                <Text>{eduDet[0].skill_set}</Text>
              </View>


          </View>


    </View>
  )
}

const styles = StyleSheet.create({

  container  : {

      flex  : 1,
      padding : 16


  },
  

  box : {

    flexDirection : 'row',
    
  }



})